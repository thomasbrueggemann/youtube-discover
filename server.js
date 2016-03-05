var express = require("express");
var compress = require("compression");
var path = require("path");
var logger = require("morgan");
var jsonfile = require("jsonfile");
var bodyParser = require("body-parser");
var swig = require("swig");
var React = require("react");
var ReactDOM = require("react-dom/server");
var Router = require("react-router");
var RoutingContext = Router.RoutingContext;
var routes = require("./app/routes");
var cookieParser = require("cookie-parser");
var minify = require("html-minifier").minify;
var mongodb = require("mongodb");
var moment = require("moment");
var ISO6391 = require("iso-639-1");
var async = require("async");

var app = express();
var tag = process.env.TAG || "dev";

app.set("port", process.env.PORT || 3000);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compress());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(path.join(__dirname, "public")));

// ROBOTS.TXT
app.get("/robots.txt", function(req, res) {
	res.set("Content-Type", "text/plain");
	return res.send("User-agent: *\nAllow: /");
});

// API / LANGUAGES
app.get("/api/languages", function(req, res) {

	// fetch distinct countries
	global.channels.distinct("language", function(err, languages) {

		// return some iso information
		return res.send({
			"languages": ISO6391.getLanguages(languages).sort(function(a, b) {
				return a.name.charCodeAt(0) - b.name.charCodeAt(0);
			}).map(function(lang) {
				return {
					"code": lang.code,
					"name": lang.name
				};
			}),
			"selected": req.cookies["channel-language"] || "en"
		});
	});
});

// API / STATS
app.get("/api/stats", function(req, res) {

	async.parallel({
		// count videos
		"videos": function(callback) {

			global.videos.count({}, callback);
		},

		// count channels
		"channels": function(callback) {

			global.channels.count({}, callback);
		}
	}, function(err, counts) {

		// oh no!
		if(err) {
			return res.status(500).send(err);
		}

		// return the number of stats
		return res.send(counts);
	});
});

// API / CHANNEL / GET / :ID
app.get("/api/channel/get/:id", function(req, res) {

	var id = req.params.id;

	// find one video
	global.channels.find({"_id": id}).project({
		"lastCrawl": false,
		"language": false,
		"detectedLanguage": false
	}).limit(1).next(function(err, channel) {

		// oh no!
		if(err || !channel) {
			return res.status(500).send(err);
		}

		async.parallel({

			// fetch latest video from mongodb
			"video": function(done) {

				// fetch latest video
				global.videos.find({"channel": id}).sort({"publishedAt": -1}).limit(1).project({
					"videos.description": false
				}).next(done);
			},

			// fetch the subscriber history of last 7 days
			"subscribers": function(done) {

				global.subscribers.find({
					"_id.channel": id,
					"date": {
						"$gte": moment().subtract(7, "days").toDate()
					}
				})
				.sort({"date": 1})
				.project({
					"subscribers": true
				})
				.toArray(done);
			}

		}, function(err, result) {

			// oh no!
			if(err) {
				return res.status(500).send(err);
			}

			channel.videos = [];
			channel.videos.push(result.video);
			channel.subHist = result.subscribers;

			return res.send(channel);
		});
	});
});

// API / CHANNEL / GET / :ID / VIDEOS
app.get("/api/channel/get/:id/videos", function(req, res) {

	var take = parseInt(req.query.take) || 10;
	var skip = parseInt(req.query.skip) || 0;

	// cound videos of channel
	global.videos.count({
		"channel": req.params.id
	}, function(err, videoCount) {

		// oh no!
		if(err) {
			return res.status(500).send({
				"data": [],
				"skip": skip,
				"take": take,
				"fin": false,
				"error": err
			});
		}

		global.videos.find({
			"channel": req.params.id
		})
		.skip(skip)
		.limit(take)
		.sort({
			"publishedAt": -1
		})
		.project({
			"channel": false,
			"comments": false
		})
		.toArray(function(err, videos) {

			// oh no!
			if(err || !videos) {
				return res.status(500).send({
					"data": [],
					"skip": skip,
					"take": take,
					"fin": false,
					"error": err
				});
			}

			// send data out
			return res.send({
				"data": videos,
				"skip": skip,
				"take": take,
				"fin": (skip + take >= videoCount)
			});
		});

	});
});

// API / CHANNELS / GET
app.get("/api/channels/get", function(req, res) {

	var sortBy = req.query.sort || "subscribers";
	var take = parseInt(req.query.take) || 25;
	var skip = parseInt(req.query.skip) || 0;

	var sortKey = "subscribers";
	switch(sortBy) {
		case "subscribers": sortKey = "subscribers"; break;
		case "founded": sortKey = "publishedAt"; break;
		case "upload": sortKey = "lastUploadAt"; break;
		case "views": sortKey = "views"; break;
	}

	var sorting = {};
	sorting[sortKey] = -1;

	// fetch channels from mongodb
	global.channels.find({
		"language": req.cookies["channel-language"] || "en"
	}).skip(skip).limit(take).sort(sorting).project({
		"videos": false,
		"country": false,
		"lastCrawl": false,
		"detectedLanguage": false,
		"language": false
	}).toArray(function(err, channels) {

		// oh no!
		if(err || !channels) {
			return res.status(500).send({
				"data": [],
				"skip": skip,
				"take": take,
				"error": err
			});
		}

		// send data out
		return res.send({
			"data": channels,
			"skip": skip,
			"take": take
		});
	});
});

// API / CHANNELS / SEARCH
app.get("/api/channels/search", function(req, res) {

	var q = req.query.q || null;

	if(!q) return res.send({ "data": [] });
	q = q.toLowerCase();

	// write query to mongodb
	global.searches.insertOne({
		"q": q,
		"time": moment.utc().toDate()
	});

	var sorting = {};

	async.parallel({

		// search for channels
		"channels": function(callback) {

			global.channels.find({
				"$text": {"$search": "\"" + q + "\"" },
				//"$text": {"$search": q },
				"language": req.cookies["channel-language"] || "en"
			}).sort(sorting).project({
				"videos": false,
				"country": false,
				"score": { "$meta": "textScore" }
			}).limit(25).toArray(callback);
		},

		// search for videos
		"videos": function(callback) {

			global.videos.find({
				"$text": {"$search": "\"" + q + "\"" }
			}).project({
				"score": { "$meta": "textScore" }
			}).limit(25).toArray(function(err, videos) {

				// find channel names to video
				async.map(videos, function(item, done) {

					global.channels.find({"_id": item.channel}).project({
						"title": true
					}).limit(1).next(function(err, channel) {

						if(err || !channel) return done(err);

						// set new channel information
						item.channel = {
							"_id": channel._id,
							"title": channel.title
						};

						return done(null, item);
					});

				}, callback);
			});
		}

	}, function(err, results) {

		// oh no!
		if(err || !results.videos || !results.channels) {
			return res.status(500).send(err);
		}

		// filter out empty videos
		var videos = results.videos.filter(function(item) {
			return !!item;
		});

		// add type to videos
		videos = videos.map(function(item) {
			item.type = "video";
			return item;
		});

		// filter out empty channels
		var channels = results.channels.filter(function(item) {
			return !!item;
		});

		// add type to channels
		channels = results.channels.map(function(item) {
			item.type = "channel";
			return item;
		});

		// merge arrays
		var result = channels.concat(videos);

		// sort by score
		result.sort(function(a, b) {
			return b.score - a.score;
		});

		return res.send(result);
	});
});

// API / VIDEO / GET / :ID
app.get("/api/video/get/:id", function(req, res) {

	global.videos.find({
		"_id": req.params.id
	}).limit(1).next(function(err, video) {

		// oh no!
		if(err || !video) {
			return res.status(500).send(err);
		}

		// find matching channel
		global.channels.find({
			"_id": video.channel
		}).project({
			"title": true,
			"thumbnail": true,
			"videos": true
		}).limit(1).next(function(err, channel) {

			// oh no!
			if(err && !channel) {
				return res.status(500).send(err);
			}

			video.channel = channel;
			return res.send(video);
		});
	});
});

// FILL HEAD
var fillHead = function(renderProps, callback) {

	// extract head information
	var head = {
		"title": "Sailing Channels",
		"description": "A compiled list of YouTube channels that are related to sailing or living aboard a sailboat.",
		"banner": "https://cdn.rawgit.com/thomasbrueggemann/sailing-channels/master/public/img/banner.png"
	};

	// VIDEO
	if(renderProps.location.pathname.indexOf("/video/") === 0) {

		global.videos.find({
			"_id": renderProps.params.id
		}).project({
			"title": true,
			"description": true
		}).limit(1).next(function(err, video) {

			if(err || !video) return callback(head);

			head.title = video.title;
			head.description = video.description;
			head.banner = "https://img.youtube.com/vi/" + video._id + "/default.jpg";

			return callback(head);
		});
	}

	// CHANNEL
	else if(renderProps.location.pathname.indexOf("/channel/") === 0) {

		global.channels.find({
			"_id": renderProps.params.id
		}).project({
			"title": true,
			"description": true,
			"thumbnail": true
		}).limit(1).next(function(err, channel) {

			if(err || !channel) return callback(head);

			head.title = channel.title;
			head.description = channel.description;
			head.banner = channel.thumbnail;

			return callback(head);
		});
	}
	else {
		return callback(head);
	}
};

// REACT MIDDLEWARE
app.use(function(req, res) {

	var staticPath = "";
	if(tag !== "dev") {
		staticPath = "https://cdn.rawgit.com/thomasbrueggemann/sailing-channels/" + tag + "/public";
	}

	Router.match({ routes: routes, location: req.url }, function(err, redirectLocation, renderProps) {

		// error
		if(err) {
			return res.status(500).send(err.message);
		}

		// redirect
		else if(redirectLocation) {
			return res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
		}

		// render
		else if(renderProps) {

			var html = ReactDOM.renderToString(<RoutingContext {...renderProps} />);

			// try to fill head info
			fillHead(renderProps, function(head) {

				// render the page
				var page = swig.renderFile("views/index.html", {
					head: head,
					html: html,
					staticPath: staticPath
				});

				// send rendered page
				return res.status(200).send(minify(page, {
					removeComments: true,
					minifyJS: true,
					useShortDoctype: true,
					removeRedundantAttributes: true,
					removeOptionalTags: true,
					removeStyleLinkTypeAttributes: true,
					removeScriptTypeAttributes: true
				}).replace(/(\r\n|\n|\r|\t)/gm,""));
			});
		}

		// not found
		else {
			var page = swig.renderFile("views/404.html", {
				staticPath: staticPath
			});

			return res.status(404).send(minify(page, {
				removeComments: true,
				minifyJS: true,
				useShortDoctype: true,
				removeRedundantAttributes: true,
				removeOptionalTags: true,
				removeStyleLinkTypeAttributes: true,
				removeScriptTypeAttributes: true
			}).replace(/(\r\n|\n|\r|\t)/gm,""));
		}
	});
});

var mongodbURL = "sailing-channels";
if(tag === "dev") {
	mongodbURL += "-dev";
}

// mongodb connect
mongodb.connect("mongodb://localhost:27017/" + mongodbURL, function(err, db) {

	if (err) throw err;

	// collections
	global.channels = db.collection("channels");
	global.searches = db.collection("searches");
	global.videos = db.collection("videos");
	global.subscribers = db.collection("subscribers");

	// start server
	app.listen(app.get("port"), function() {
		console.log("Express server listening on port " + app.get("port"));
	});
});
