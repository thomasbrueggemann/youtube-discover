(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _helpersHttp = require("../helpers/http");

var _helpersHttp2 = _interopRequireDefault(_helpersHttp);

// ADMIN ACTIONS

var AdminActions = (function () {
	function AdminActions() {
		_classCallCheck(this, AdminActions);

		this.generateActions("getBlacklistedSuccess", "getBlacklistedFail", "deleteBlacklistedSuccess", "deleteBlacklistedFail", "addBlacklistedSuccess", "addBlacklistedFail", "getAdditionalSuccess", "getAdditionalFail", "addAdditionalSuccess", "addAdditionalFail", "deleteAdditionalSuccess", "deleteAdditionalFail", "getFlagsSuccess", "getFlagsFail", "deleteFlagsSuccess", "deleteFlagsFail");
	}

	// GET CHANNEL

	_createClass(AdminActions, [{
		key: "getBlacklisted",
		value: function getBlacklisted() {
			var _this = this;

			new _helpersHttp2["default"]().get({
				"url": "/api/admin/blacklisted",
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this.actions.getBlacklistedFail(err);
				}

				_this.actions.getBlacklistedSuccess(data);
			});
		}

		// DELETE BACKLISTED
	}, {
		key: "deleteBlacklisted",
		value: function deleteBlacklisted(id) {
			var _this2 = this;

			new _helpersHttp2["default"]().get({
				"url": "/api/admin/blacklisted/delete/" + id,
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this2.actions.deleteBlacklistedFail(err);
				}

				_this2.actions.deleteBlacklistedSuccess(data);
			});
		}

		// ADD BLACKLISTED
	}, {
		key: "addBlacklisted",
		value: function addBlacklisted(id) {
			var _this3 = this;

			new _helpersHttp2["default"]().get({
				"url": "/api/admin/blacklisted/add/" + id,
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this3.actions.addBlacklistedFail(err);
				}

				_this3.actions.addBlacklistedSuccess(data);
			});
		}

		// GET ADDITIONAL
	}, {
		key: "getAdditional",
		value: function getAdditional() {
			var _this4 = this;

			new _helpersHttp2["default"]().get({
				"url": "/api/admin/additional",
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this4.actions.getAdditionalFail(err);
				}

				_this4.actions.getAdditionalSuccess(data);
			});
		}

		// ADD ADDITIONAL
	}, {
		key: "addAdditional",
		value: function addAdditional(id) {
			var _this5 = this;

			new _helpersHttp2["default"]().get({
				"url": "/api/admin/additional/add/" + id,
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this5.actions.addAdditionalFail(err);
				}

				_this5.actions.addAdditionalSuccess(data);
			});
		}

		// DELETE BACKLISTED
	}, {
		key: "deleteAdditional",
		value: function deleteAdditional(id) {
			var _this6 = this;

			new _helpersHttp2["default"]().get({
				"url": "/api/admin/additional/delete/" + id,
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this6.actions.deleteAdditionalFail(err);
				}

				_this6.actions.deleteAdditionalSuccess(data);
			});
		}

		// GET FLAGS
	}, {
		key: "getFlags",
		value: function getFlags() {
			var _this7 = this;

			new _helpersHttp2["default"]().get({
				"url": "/api/admin/flags",
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this7.actions.getFlagsFail(err);
				}

				_this7.actions.getFlagsSuccess(data);
			});
		}

		// DELETE FLAGS
	}, {
		key: "deleteFlags",
		value: function deleteFlags(channel, user) {
			var _this8 = this;

			new _helpersHttp2["default"]().get({
				"url": "/api/admin/flags/delete/" + channel + "/" + user,
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this8.actions.deleteFlagsFail(err);
				}

				_this8.actions.deleteFlagsSuccess(data);
			});
		}
	}]);

	return AdminActions;
})();

exports["default"] = _alt2["default"].createActions(AdminActions);
module.exports = exports["default"];

},{"../alt":6,"../helpers/http":51}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _helpersHttp = require("../helpers/http");

var _helpersHttp2 = _interopRequireDefault(_helpersHttp);

// CHANNEL ACTIONS

var ChannelActions = (function () {
	function ChannelActions() {
		_classCallCheck(this, ChannelActions);

		this.generateActions("getChannelsSuccess", "getChannelsFail", "getChannelSuccess", "getChannelFail", "searchChannelsSuccess", "searchChannelsFail");
	}

	// GET CHANNEL

	_createClass(ChannelActions, [{
		key: "getChannels",
		value: function getChannels(sortBy, skip, take) {
			var _this = this;

			var url = "/api/channels/get?sort=" + sortBy + "&skip=" + skip + "&take=" + take;

			// append mobile parameter to not load description
			if ($(window).width() < 768) {
				url += "&mobile=true";
			}

			new _helpersHttp2["default"]().get({
				"url": url,
				"type": "GET",
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this.actions.getChannelsFail(err);
				}

				_this.actions.getChannelsSuccess(data);
			});
		}

		// GET CHANNEL
	}, {
		key: "getChannel",
		value: function getChannel(id) {
			var _this2 = this;

			new _helpersHttp2["default"]().get({
				"url": "/api/channel/get/" + id,
				"type": "GET",
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this2.actions.getChannelFail(err);
				}

				_this2.actions.getChannelSuccess(data);
			});
		}

		// SEARCH CHANNELS
	}, {
		key: "searchChannels",
		value: function searchChannels(q) {
			var _this3 = this;

			var url = "/api/channels/search?q=" + encodeURIComponent(q);

			// append mobile parameter to not load description
			if ($(window).width() < 768) {
				url += "&mobile=true";
			}

			new _helpersHttp2["default"]().get({
				"url": url,
				"type": "GET",
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return _this3.actions.searchChannelsFail(err);
				}

				_this3.actions.searchChannelsSuccess(data);
			});
		}

		// SUBSCRIBE
	}, {
		key: "subscribe",
		value: function subscribe(channelId, callback) {
			new _helpersHttp2["default"]().post({
				"url": "/api/channel/subscribe",
				"data": {
					"channel": channelId
				},
				"type": "POST",
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				if (err) {
					return callback(err);
				}

				return callback(null, data);
			});
		}

		// UNSUBSCRIBE
	}, {
		key: "unsubscribe",
		value: function unsubscribe(channelId, callback) {
			new _helpersHttp2["default"]().post({
				"url": "/api/channel/unsubscribe",
				"data": {
					"channel": channelId
				},
				"type": "POST",
				"dataType": "json",
				"cache": false
			}, function (err, data) {

				console.log(err);
				if (err) {
					return callback(err);
				}

				return callback(null, data);
			});
		}
	}]);

	return ChannelActions;
})();

exports["default"] = _alt2["default"].createActions(ChannelActions);
module.exports = exports["default"];

},{"../alt":6,"../helpers/http":51}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _helpersHttp = require("../helpers/http");

var _helpersHttp2 = _interopRequireDefault(_helpersHttp);

// LANGUAGE ACTIONS

var LanguageActions = (function () {
    function LanguageActions() {
        _classCallCheck(this, LanguageActions);

        this.generateActions("getLanguagesSuccess", "getLanguagesFail");
    }

    // GET LANGUAGES

    _createClass(LanguageActions, [{
        key: "getLanguages",
        value: function getLanguages() {
            var _this = this;

            new _helpersHttp2["default"]().get({
                "url": "/api/languages",
                "type": "GET",
                "dataType": "json",
                "cache": false
            }, function (err, data) {

                if (err) {
                    return _this.actions.getLanguagesFail(err);
                }

                _this.actions.getLanguagesSuccess(data);
            });
        }
    }]);

    return LanguageActions;
})();

exports["default"] = _alt2["default"].createActions(LanguageActions);
module.exports = exports["default"];

},{"../alt":6,"../helpers/http":51}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _helpersHttp = require("../helpers/http");

var _helpersHttp2 = _interopRequireDefault(_helpersHttp);

// LANGUAGE ACTIONS

var MeActions = (function () {
	function MeActions() {
		_classCallCheck(this, MeActions);

		this.generateActions("getMeSuccess", "getMeFail", "getSubscriptionsSuccess", "getSubscriptionsFail");
	}

	// GET ME

	_createClass(MeActions, [{
		key: "getMe",
		value: function getMe() {
			var _this = this;

			new _helpersHttp2["default"]().get({
				url: "/api/me",
				type: "GET",
				dataType: "json",
				cache: false
			}, function (err, data) {
				if (err) {
					return _this.actions.getMeFail(err);
				}

				_this.actions.getMeSuccess(data);
			});
		}

		// GET SUBSCRIPTIONS
	}, {
		key: "getSubscriptions",
		value: function getSubscriptions() {
			var _this2 = this;

			new _helpersHttp2["default"]().get({
				url: "/api/me/subscriptions",
				type: "GET",
				dataType: "json",
				cache: false
			}, function (err, data) {
				if (err) {
					return _this2.actions.getSubscriptionsFail(err);
				}

				_this2.actions.getSubscriptionsSuccess(data);
			});
		}
	}]);

	return MeActions;
})();

exports["default"] = _alt2["default"].createActions(MeActions);
module.exports = exports["default"];

},{"../alt":6,"../helpers/http":51}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

// VIDEO ACTIONS

var VideoActions = (function () {
    function VideoActions() {
        _classCallCheck(this, VideoActions);

        this.generateActions("getVideosSuccess", "getVideosFail", "getVideoSuccess", "getVideoFail");
    }

    // GET VIDEOS

    _createClass(VideoActions, [{
        key: "getVideos",
        value: function getVideos(id, skip, take) {
            var _this = this;

            $.ajax({
                "url": "/api/channel/get/" + id + "/videos?skip=" + skip + "&take=" + take,
                "type": "GET",
                "dataType": "json",
                "cache": true
            }).done(function (data) {
                _this.actions.getVideosSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getVideosFail(jqXhr);
            });
        }

        // GET VIDEO
    }, {
        key: "getVideo",
        value: function getVideo(id) {
            var _this2 = this;

            $.ajax({
                "url": "/api/video/get/" + id,
                "type": "GET",
                "dataType": "json",
                "cache": true
            }).done(function (data) {
                _this2.actions.getVideoSuccess(data);
            }).fail(function (jqXhr) {
                _this2.actions.getVideoFail(jqXhr);
            });
        }
    }]);

    return VideoActions;
})();

exports["default"] = _alt2["default"].createActions(VideoActions);
module.exports = exports["default"];

},{"../alt":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _alt = require("alt");

var _alt2 = _interopRequireDefault(_alt);

exports["default"] = new _alt2["default"]();
module.exports = exports["default"];

},{"alt":"alt"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionsAdminActions = require("../../actions/AdminActions");

var _actionsAdminActions2 = _interopRequireDefault(_actionsAdminActions);

var _storesAdminStore = require("../../stores/AdminStore");

var _storesAdminStore2 = _interopRequireDefault(_storesAdminStore);

var _AdminListItem = require("./AdminListItem");

var _AdminListItem2 = _interopRequireDefault(_AdminListItem);

var Additional = (function (_React$Component) {
	_inherits(Additional, _React$Component);

	function Additional(props) {
		_classCallCheck(this, Additional);

		_get(Object.getPrototypeOf(Additional.prototype), "constructor", this).call(this, props);
		this.state = _storesAdminStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(Additional, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesAdminStore2["default"].listen(this.onChange);
			_actionsAdminActions2["default"].getAdditional();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesAdminStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// ADD ADDITIONAL
	}, {
		key: "addAdditional",
		value: function addAdditional() {
			var id = $("input[name='channelId']").val();
			if (id) {
				_actionsAdminActions2["default"].addAdditional(id);
				$("input[name='channelId']").clear();
			}
		}

		// DELETE ADDITIONAL
	}, {
		key: "deleteItem",
		value: function deleteItem(id) {
			if (confirm("Really?") === true) {
				_actionsAdminActions2["default"].deleteAdditional(id);
			}
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			// reverse the order the additional channels are listed
			this.state.additional.reverse();

			return _react2["default"].createElement(
				"div",
				{ className: "row" },
				_react2["default"].createElement(
					"div",
					{ className: "col-md-12" },
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-12" },
							_react2["default"].createElement(
								"h2",
								null,
								"Additional Channels"
							)
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-3" },
							_react2["default"].createElement("input", {
								type: "text",
								width: "100%",
								className: "form-control",
								placeholder: "ChannelId",
								name: "channelId"
							})
						),
						_react2["default"].createElement(
							"div",
							{ className: "col-md-1" },
							_react2["default"].createElement(
								"button",
								{
									className: "btn btn-primary",
									onClick: this.addAdditional.bind(this)
								},
								"Add"
							)
						),
						_react2["default"].createElement("div", { className: "col-md-8" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"table",
							{ className: "table" },
							_react2["default"].createElement(
								"tbody",
								null,
								this.state.additional.map(function (b) {
									return _react2["default"].createElement(_AdminListItem2["default"], {
										key: b._id,
										id: b._id,
										parent: _this
									});
								})
							)
						)
					)
				)
			);
		}
	}]);

	return Additional;
})(_react2["default"].Component);

exports["default"] = Additional;
module.exports = exports["default"];

},{"../../actions/AdminActions":1,"../../stores/AdminStore":54,"./AdminListItem":9,"react":"react"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactCookie = require("react-cookie");

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _actionsMeActions = require("../../actions/MeActions");

var _actionsMeActions2 = _interopRequireDefault(_actionsMeActions);

var _storesMeStore = require("../../stores/MeStore");

var _storesMeStore2 = _interopRequireDefault(_storesMeStore);

var _Logo = require("../Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var Admin = (function (_React$Component) {
	_inherits(Admin, _React$Component);

	function Admin(props) {
		_classCallCheck(this, Admin);

		_get(Object.getPrototypeOf(Admin.prototype), "constructor", this).call(this, props);

		this.state = _storesMeStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(Admin, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesMeStore2["default"].listen(this.onChange);
			_actionsMeActions2["default"].getMe();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesMeStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);

			// check if user is authorised to view the admin page
			if (!this.state.me.user || !(this.state.me.user.admin === true)) {
				this.props.history.push("/");
			}
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			if (!this.state.me.user || !(this.state.me.user.admin === true)) {
				return null;
			}

			// if so, render the admin page
			else {
					return _react2["default"].createElement(
						"div",
						{ className: "container" },
						_react2["default"].createElement(_Logo2["default"], null),
						_react2["default"].createElement(
							"div",
							{ className: "row" },
							_react2["default"].createElement(
								"div",
								{ className: "col-md-3" },
								_react2["default"].createElement(
									"ul",
									{ className: "navi" },
									_react2["default"].createElement(
										"li",
										null,
										_react2["default"].createElement(
											_reactRouter.Link,
											{ to: "/admin/dashboard" },
											"Dashboard"
										)
									),
									_react2["default"].createElement(
										"li",
										null,
										_react2["default"].createElement(
											_reactRouter.Link,
											{ to: "/admin/flags" },
											"Flags"
										)
									),
									_react2["default"].createElement(
										"li",
										null,
										_react2["default"].createElement(
											_reactRouter.Link,
											{ to: "/admin/additional" },
											"Additional Channels"
										)
									),
									_react2["default"].createElement(
										"li",
										null,
										_react2["default"].createElement(
											_reactRouter.Link,
											{ to: "/admin/blacklist" },
											"Blacklist Channel"
										)
									)
								)
							),
							_react2["default"].createElement(
								"div",
								{ className: "col-md-9" },
								this.props.children
							)
						)
					);
				}
		}
	}]);

	return Admin;
})(_react2["default"].Component);

exports["default"] = Admin;
module.exports = exports["default"];

},{"../../actions/MeActions":4,"../../stores/MeStore":57,"../Logo":30,"react":"react","react-cookie":"react-cookie","react-router":"react-router"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _storesAdminStore = require("../../stores/AdminStore");

var _storesAdminStore2 = _interopRequireDefault(_storesAdminStore);

var _actionsAdminActions = require("../../actions/AdminActions");

var _actionsAdminActions2 = _interopRequireDefault(_actionsAdminActions);

var _ChannelInfo = require("./ChannelInfo");

var _ChannelInfo2 = _interopRequireDefault(_ChannelInfo);

var BlacklistItem = (function (_React$Component) {
	_inherits(BlacklistItem, _React$Component);

	function BlacklistItem(props) {
		_classCallCheck(this, BlacklistItem);

		_get(Object.getPrototypeOf(BlacklistItem.prototype), "constructor", this).call(this, props);
		this.state = _storesAdminStore2["default"].getState();
	}

	_createClass(BlacklistItem, [{
		key: "deleteItem",
		value: function deleteItem() {
			this.props.parent.deleteItem(this.props.id);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"tr",
				null,
				_react2["default"].createElement(
					"td",
					null,
					_react2["default"].createElement(
						"button",
						{ className: "btn btn-danger", onClick: this.deleteItem.bind(this) },
						"Delete"
					)
				),
				_react2["default"].createElement(
					"td",
					null,
					_react2["default"].createElement(_ChannelInfo2["default"], { id: this.props.id })
				)
			);
		}
	}]);

	return BlacklistItem;
})(_react2["default"].Component);

exports["default"] = BlacklistItem;
module.exports = exports["default"];

},{"../../actions/AdminActions":1,"../../stores/AdminStore":54,"./ChannelInfo":11,"react":"react"}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionsAdminActions = require("../../actions/AdminActions");

var _actionsAdminActions2 = _interopRequireDefault(_actionsAdminActions);

var _storesAdminStore = require("../../stores/AdminStore");

var _storesAdminStore2 = _interopRequireDefault(_storesAdminStore);

var _AdminListItem = require("./AdminListItem");

var _AdminListItem2 = _interopRequireDefault(_AdminListItem);

var Blacklist = (function (_React$Component) {
	_inherits(Blacklist, _React$Component);

	function Blacklist(props) {
		_classCallCheck(this, Blacklist);

		_get(Object.getPrototypeOf(Blacklist.prototype), "constructor", this).call(this, props);
		this.state = _storesAdminStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(Blacklist, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesAdminStore2["default"].listen(this.onChange);
			_actionsAdminActions2["default"].getBlacklisted();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesAdminStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// DELETE BLACKLISTED
	}, {
		key: "deleteItem",
		value: function deleteItem(id) {
			if (confirm("Really?") === true) {
				_actionsAdminActions2["default"].deleteBlacklisted(id);
			}
		}

		// ADD BLACKLISTED
	}, {
		key: "addBlacklisted",
		value: function addBlacklisted() {
			var id = $("input[name='channelId']").val();
			if (id) {
				_actionsAdminActions2["default"].addBlacklisted(id);
			}
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			return _react2["default"].createElement(
				"div",
				{ className: "row" },
				_react2["default"].createElement(
					"div",
					{ className: "col-md-12" },
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-12" },
							_react2["default"].createElement(
								"h2",
								null,
								"Blacklist Channels"
							)
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-3" },
							_react2["default"].createElement("input", { type: "text", width: "100%", className: "form-control", placeholder: "ChannelId", name: "channelId" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "col-md-1" },
							_react2["default"].createElement(
								"button",
								{ className: "btn btn-primary", onClick: this.addBlacklisted.bind(this) },
								"Add"
							)
						),
						_react2["default"].createElement("div", { className: "col-md-8" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-12" },
							_react2["default"].createElement(
								"table",
								{ className: "table" },
								_react2["default"].createElement(
									"tbody",
									null,
									this.state.blacklisted.map(function (b) {
										return _react2["default"].createElement(_AdminListItem2["default"], { key: b._id, id: b._id, parent: _this });
									})
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Blacklist;
})(_react2["default"].Component);

exports["default"] = Blacklist;
module.exports = exports["default"];

},{"../../actions/AdminActions":1,"../../stores/AdminStore":54,"./AdminListItem":9,"react":"react"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var ChannelInfo = (function (_React$Component) {
	_inherits(ChannelInfo, _React$Component);

	function ChannelInfo(props) {
		_classCallCheck(this, ChannelInfo);

		_get(Object.getPrototypeOf(ChannelInfo.prototype), "constructor", this).call(this, props);
		this.state = {};
	}

	_createClass(ChannelInfo, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var that = this;

			$.get("/api/admin/channel/" + this.props.id, (function (data) {
				this.setState(data);
			}).bind(this));
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			if (!this.state.title) {
				return _react2["default"].createElement(
					"a",
					{ target: "_blank", href: "https://youtube.com/channel/" + this.props.id },
					this.props.id
				);
			} else {

				return _react2["default"].createElement(
					"a",
					{ target: "_blank", href: "https://youtube.com/channel/" + this.props.id, title: this.state.description },
					this.state.title
				);
			}
		}
	}]);

	return ChannelInfo;
})(_react2["default"].Component);

exports["default"] = ChannelInfo;
module.exports = exports["default"];

},{"react":"react"}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Dashboard = (function (_React$Component) {
	_inherits(Dashboard, _React$Component);

	function Dashboard(props) {
		_classCallCheck(this, Dashboard);

		_get(Object.getPrototypeOf(Dashboard.prototype), "constructor", this).call(this, props);
		this.int = null;
	}

	// COMPONENT DID MOUNT

	_createClass(Dashboard, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.int = window.setInterval(this.updateData, 10000);
			this.updateData();
		}
	}, {
		key: "updateData",
		value: function updateData() {

			// stats
			$.get("/api/stats", function (data) {
				$("#channelsCount").html(data.channels);
				$("#videosCount").html(data.videos);
			});
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			window.clearInterval(this.int);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ className: "row" },
				_react2["default"].createElement(
					"div",
					{ className: "col-md-12" },
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-12" },
							_react2["default"].createElement(
								"h2",
								null,
								"Dashboard"
							)
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-3" },
							_react2["default"].createElement("span", { id: "channelsCount" }),
							" Channels"
						),
						_react2["default"].createElement(
							"div",
							{ className: "col-md-3" },
							_react2["default"].createElement("span", { id: "videosCount" }),
							" Videos"
						)
					)
				)
			);
		}
	}]);

	return Dashboard;
})(_react2["default"].Component);

exports["default"] = Dashboard;
module.exports = exports["default"];

},{"react":"react"}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionsAdminActions = require("../../actions/AdminActions");

var _actionsAdminActions2 = _interopRequireDefault(_actionsAdminActions);

var _storesAdminStore = require("../../stores/AdminStore");

var _storesAdminStore2 = _interopRequireDefault(_storesAdminStore);

var _FlagsListItem = require("./FlagsListItem");

var _FlagsListItem2 = _interopRequireDefault(_FlagsListItem);

var Flags = (function (_React$Component) {
	_inherits(Flags, _React$Component);

	function Flags(props) {
		_classCallCheck(this, Flags);

		_get(Object.getPrototypeOf(Flags.prototype), "constructor", this).call(this, props);
		this.state = _storesAdminStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(Flags, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesAdminStore2["default"].listen(this.onChange);
			_actionsAdminActions2["default"].getFlags();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesAdminStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// ADD BLACKLISTED
	}, {
		key: "addBlacklisted",
		value: function addBlacklisted(channel, user) {
			if (channel && user) {
				_actionsAdminActions2["default"].addBlacklisted(channel);
				_actionsAdminActions2["default"].deleteFlags(channel, user);
			}
		}
	}, {
		key: "ignoreFlags",
		value: function ignoreFlags(channel, user) {
			if (channel && user) {
				_actionsAdminActions2["default"].deleteFlags(channel, user);
			}
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			return _react2["default"].createElement(
				"div",
				{ className: "row" },
				_react2["default"].createElement(
					"div",
					{ className: "col-md-12" },
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-12" },
							_react2["default"].createElement(
								"h2",
								null,
								"Flags"
							)
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-12" },
							_react2["default"].createElement(
								"table",
								{ className: "table" },
								_react2["default"].createElement(
									"thead",
									null,
									_react2["default"].createElement(
										"tr",
										null,
										_react2["default"].createElement("td", null),
										_react2["default"].createElement(
											"td",
											null,
											"Channel"
										),
										_react2["default"].createElement(
											"td",
											null,
											"By User"
										),
										_react2["default"].createElement(
											"td",
											null,
											"When"
										)
									)
								),
								_react2["default"].createElement(
									"tbody",
									null,
									this.state.flags.map(function (b) {
										return _react2["default"].createElement(_FlagsListItem2["default"], { key: JSON.stringify(b._id), data: b, parent: _this });
									})
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Flags;
})(_react2["default"].Component);

exports["default"] = Flags;
module.exports = exports["default"];

},{"../../actions/AdminActions":1,"../../stores/AdminStore":54,"./FlagsListItem":14,"react":"react"}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _storesAdminStore = require("../../stores/AdminStore");

var _storesAdminStore2 = _interopRequireDefault(_storesAdminStore);

var _actionsAdminActions = require("../../actions/AdminActions");

var _actionsAdminActions2 = _interopRequireDefault(_actionsAdminActions);

var _ChannelInfo = require("./ChannelInfo");

var _ChannelInfo2 = _interopRequireDefault(_ChannelInfo);

var BlacklistItem = (function (_React$Component) {
	_inherits(BlacklistItem, _React$Component);

	function BlacklistItem(props) {
		_classCallCheck(this, BlacklistItem);

		_get(Object.getPrototypeOf(BlacklistItem.prototype), "constructor", this).call(this, props);
		this.state = _storesAdminStore2["default"].getState();
	}

	_createClass(BlacklistItem, [{
		key: "addBlacklisted",
		value: function addBlacklisted() {
			this.props.parent.addBlacklisted(this.props.data._id.channel, this.props.data._id.user);
		}
	}, {
		key: "ignoreFlags",
		value: function ignoreFlags() {
			this.props.parent.ignoreFlags(this.props.data._id.channel, this.props.data._id.user);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"tr",
				null,
				_react2["default"].createElement(
					"td",
					null,
					_react2["default"].createElement(
						"button",
						{ className: "btn btn-danger", onClick: this.addBlacklisted.bind(this) },
						"Blacklist"
					),
					_react2["default"].createElement(
						"button",
						{ className: "btn btn-default", onClick: this.ignoreFlags.bind(this) },
						"Ignore"
					)
				),
				_react2["default"].createElement(
					"td",
					null,
					_react2["default"].createElement(_ChannelInfo2["default"], { id: this.props.data._id.channel })
				),
				_react2["default"].createElement(
					"td",
					null,
					_react2["default"].createElement(_ChannelInfo2["default"], { id: this.props.data._id.user })
				),
				_react2["default"].createElement(
					"td",
					null,
					this.props.data.when
				)
			);
		}
	}]);

	return BlacklistItem;
})(_react2["default"].Component);

exports["default"] = BlacklistItem;
module.exports = exports["default"];

},{"../../actions/AdminActions":1,"../../stores/AdminStore":54,"./ChannelInfo":11,"react":"react"}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Footer = require("./Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(App, [{
		key: "componentDidMount",

		// COMPONENT DID MOUNT
		value: function componentDidMount() {
			$.material.init();

			window.setTimeout(function () {
				if (!($("#banner-dialog").data("bs.modal") || {}).isShown && !Cookies.get("banner-dialog")) {
					// open the dialog
					$("#banner-dialog").modal("show");
					$("#banner-img").attr("src", STATIC_PATH + "/img/twoaboardtuuli.jpg");
					Cookies.set("banner-dialog", "shown", { expires: 3 });
				}
			}, 45000);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				null,
				this.props.children,
				_react2["default"].createElement(_Footer2["default"], null)
			);
		}
	}]);

	return App;
})(_react2["default"].Component);

exports["default"] = App;
module.exports = exports["default"];

},{"./Footer":25,"react":"react"}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var BannerDialog = (function (_React$Component) {
	_inherits(BannerDialog, _React$Component);

	function BannerDialog() {
		_classCallCheck(this, BannerDialog);

		_get(Object.getPrototypeOf(BannerDialog.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BannerDialog, [{
		key: "render",

		// RENDER
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ id: "banner-dialog", className: "modal fade" },
				_react2["default"].createElement(
					"div",
					{ className: "modal-dialog" },
					_react2["default"].createElement(
						"div",
						{ className: "modal-content" },
						_react2["default"].createElement(
							"div",
							{ className: "modal-header" },
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" },
								"×"
							),
							_react2["default"].createElement(
								"h3",
								{ className: "modal-title" },
								"Thanks for stopping by!"
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "modal-body" },
							_react2["default"].createElement(
								"p",
								null,
								_react2["default"].createElement("img", { id: "banner-img", src: "", width: "100%" })
							),
							_react2["default"].createElement(
								"p",
								null,
								"The ",
								_react2["default"].createElement(
									"a",
									{ href: "/channel/UCZbZeC2OfdVMwm9AR_zu0_g", target: "_blank" },
									_react2["default"].createElement(
										"b",
										null,
										"Two aboard Tuuli crew"
									)
								),
								" created this website in their sparetime for you."
							),
							_react2["default"].createElement(
								"p",
								null,
								"If you like it, and want to give something back, feel free to support us with a tip via the following platforms. It means a lot to us!"
							),
							_react2["default"].createElement(
								"p",
								null,
								"- Kristy & Thomas"
							),
							_react2["default"].createElement(
								"div",
								{ className: "row support-row" },
								_react2["default"].createElement(
									"div",
									{ className: "col-md-6 text-center" },
									_react2["default"].createElement(
										"a",
										{ href: "https://www.patreon.com/sailingchannels", target: "_blank" },
										_react2["default"].createElement("img", { src: "https://rawgit.com/sailingchannels/website/master/public/img/patreon.jpg", height: "120", width: "120" })
									)
								),
								_react2["default"].createElement(
									"div",
									{ className: "col-md-6 text-center" },
									_react2["default"].createElement(
										"a",
										{ href: "https://www.paypal.me/sailingchannels", target: "_blank" },
										_react2["default"].createElement("img", { src: "https://rawgit.com/sailingchannels/website/master/public/img/paypal.png", height: "120", width: "120" })
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return BannerDialog;
})(_react2["default"].Component);

exports["default"] = BannerDialog;
module.exports = exports["default"];

},{"react":"react","react-router":"react-router"}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _actionsChannelActions = require("../actions/ChannelActions");

var _actionsChannelActions2 = _interopRequireDefault(_actionsChannelActions);

var _storesChannelStore = require("../stores/ChannelStore");

var _storesChannelStore2 = _interopRequireDefault(_storesChannelStore);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _VideoList = require("./VideoList");

var _VideoList2 = _interopRequireDefault(_VideoList);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _SubscriberHistoryChart = require("./SubscriberHistoryChart");

var _SubscriberHistoryChart2 = _interopRequireDefault(_SubscriberHistoryChart);

var _SubscribeButton = require("./SubscribeButton");

var _SubscribeButton2 = _interopRequireDefault(_SubscribeButton);

var _PositionMap = require("./PositionMap");

var _PositionMap2 = _interopRequireDefault(_PositionMap);

var _FlagButton = require("./FlagButton");

var _FlagButton2 = _interopRequireDefault(_FlagButton);

var ChannelDetail = (function (_React$Component) {
	_inherits(ChannelDetail, _React$Component);

	// CONSTRUCTOR

	function ChannelDetail(props) {
		_classCallCheck(this, ChannelDetail);

		_get(Object.getPrototypeOf(ChannelDetail.prototype), "constructor", this).call(this, props);
		this.state = _storesChannelStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(ChannelDetail, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesChannelStore2["default"].listen(this.onChange);
			_actionsChannelActions2["default"].getChannel(this.props.params.id);
		}

		// COMPONENT WILL RECEIVE PROPS
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {

			if (nextProps.params.id !== this.props.params.id) {
				_actionsChannelActions2["default"].getChannel(nextProps.params.id);
			}
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesChannelStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// FORMAT DATE
	}, {
		key: "formatDate",
		value: function formatDate(unix) {
			var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var d = new Date(unix * 1000);
			return m[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			// no channel yet
			if (!this.state.channel) {
				return null;
			}

			// create custom links list
			var customLinks = [];
			if ("customLinks" in this.state.channel && this.state.channel.customLinks !== null && this.state.channel.customLinks.length > 0) {

				for (var l in this.state.channel.customLinks) {
					customLinks.push(_react2["default"].createElement(
						"li",
						null,
						_react2["default"].createElement(
							"a",
							{ target: "_blank", href: this.state.channel.customLinks[l].url },
							_react2["default"].createElement("img", { src: this.state.channel.customLinks[l].icon }),
							" ",
							this.state.channel.customLinks[l].title
						)
					));
				}
			}

			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(_reactHelmet2["default"], { title: this.state.channel.title + " | Sailing Channels" }),
				_react2["default"].createElement(_OffsetSocial2["default"], null),
				_react2["default"].createElement(_Logo2["default"], null),
				_react2["default"].createElement(_OffsetMenu2["default"], null),
				_react2["default"].createElement(
					"div",
					{ className: "row" },
					_react2["default"].createElement("div", { className: "col-md-1" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-10" },
						_react2["default"].createElement(
							"div",
							{ className: "row" },
							_react2["default"].createElement(
								"div",
								{ className: "col-md-12" },
								_react2["default"].createElement(
									"center",
									null,
									_react2["default"].createElement(
										"h1",
										null,
										this.state.channel.title
									)
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "row" },
							_react2["default"].createElement(
								"div",
								{ className: "col-md-2 col-sm-2" },
								_react2["default"].createElement("img", { src: this.state.channel.thumbnail, className: "channel-thumb" })
							),
							_react2["default"].createElement(
								"div",
								{ className: "col-md-7 col-sm-7" },
								_react2["default"].createElement("p", { className: "channel-description", dangerouslySetInnerHTML: { __html: anchorme.js(this.state.channel.description.replace("\n", "<br />"), { target: "_blank" }) } }),
								_react2["default"].createElement(
									"p",
									null,
									" "
								),
								this.state.channel.position ? _react2["default"].createElement(
									"div",
									null,
									_react2["default"].createElement(
										"p",
										null,
										_react2["default"].createElement(
											"b",
											null,
											"Latest position:"
										),
										" ",
										_react2["default"].createElement(
											"sup",
											null,
											"(beta)"
										)
									),
									_react2["default"].createElement(_PositionMap2["default"], { channel: this.state.channel.id }),
									_react2["default"].createElement(
										"p",
										null,
										" "
									)
								) : null,
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Latest video:"
									)
								),
								_react2["default"].createElement("iframe", { width: "100%", height: "315", src: "https://www.youtube.com/embed/" + this.state.channel.videos[0]["_id"] + "?origin=https://sailing-channels.com", frameBorder: "0", allowFullScreen: true }),
								_react2["default"].createElement(
									"p",
									null,
									" "
								),
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"All videos:"
									)
								),
								_react2["default"].createElement(_VideoList2["default"], { channel: this.state.channel })
							),
							_react2["default"].createElement(
								"div",
								{ className: "col-md-3 col-sm-3" },
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Subscribers in last 7 days:"
									)
								),
								_react2["default"].createElement(_SubscriberHistoryChart2["default"], { channel: this.state.channel }),
								_react2["default"].createElement(
									"p",
									null,
									" "
								),
								this.state.channel.subscribersHidden === true ? _react2["default"].createElement(
									"p",
									{ className: "text-warning" },
									_react2["default"].createElement(
										"b",
										null,
										"Subscriber info hidden by channel ",
										_react2["default"].createElement("i", { className: "fa fa-frown-o" })
									)
								) : null,
								this.state.channel.subscribersHidden === false ? _react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Subscribers:"
									),
									" ",
									this.state.channel.subscribers.toLocaleString()
								) : null,
								this.state.channel.subscribersHidden === false ? _react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Videos:"
									),
									" ",
									this.state.channel.videoCount
								) : null,
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Views:"
									),
									" ",
									this.state.channel.views.toLocaleString()
								),
								this.state.channel.lastUploadAt ? _react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Last upload:"
									),
									" ",
									$.timeago(new Date(this.state.channel.lastUploadAt * 1000))
								) : "",
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Founded:"
									),
									" ",
									this.formatDate(this.state.channel.publishedAt)
								),
								_react2["default"].createElement(
									"p",
									null,
									" "
								),
								_react2["default"].createElement(_SubscribeButton2["default"], { channel: this.state.channel }),
								_react2["default"].createElement(
									"p",
									null,
									" "
								),
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"a",
										{ target: "_blank", href: "https://youtube.com/channel/" + this.state.channel.id },
										_react2["default"].createElement("i", { className: "fa fa-external-link fa-fw" }),
										" Open YouTube channel"
									)
								),
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(_FlagButton2["default"], { channel: this.state.channel })
								),
								_react2["default"].createElement(
									"p",
									null,
									" "
								),
								customLinks.length > 0 ? _react2["default"].createElement(
									"ul",
									{ className: "hidden-sm hidden-xs list-unstyled websites-list" },
									_react2["default"].createElement(
										"li",
										null,
										_react2["default"].createElement(
											"b",
											null,
											"Links:"
										)
									),
									customLinks
								) : null
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-1" })
				),
				_react2["default"].createElement(
					"p",
					null,
					" "
				)
			);
		}
	}]);

	return ChannelDetail;
})(_react2["default"].Component);

exports["default"] = ChannelDetail;
module.exports = exports["default"];

},{"../actions/ChannelActions":2,"../stores/ChannelStore":55,"./FlagButton":24,"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"./PositionMap":34,"./SubscribeButton":40,"./SubscriberHistoryChart":41,"./VideoList":48,"react":"react","react-helmet":88}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ChannelListItem = require("./ChannelListItem");

var _ChannelListItem2 = _interopRequireDefault(_ChannelListItem);

var _actionsChannelActions = require("../actions/ChannelActions");

var _actionsChannelActions2 = _interopRequireDefault(_actionsChannelActions);

var _storesChannelStore = require("../stores/ChannelStore");

var _storesChannelStore2 = _interopRequireDefault(_storesChannelStore);

var _reactInfinite = require("react-infinite");

var _reactInfinite2 = _interopRequireDefault(_reactInfinite);

var ChannelList = (function (_React$Component) {
	_inherits(ChannelList, _React$Component);

	// CONSTRUCTOR

	function ChannelList(props) {
		_classCallCheck(this, ChannelList);

		_get(Object.getPrototypeOf(ChannelList.prototype), "constructor", this).call(this, props);
		this.state = _storesChannelStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(ChannelList, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesChannelStore2["default"].listen(this.onChange);

			// handle event bus page changes
			$(window).on("changeSort", this.changeSort.bind(this));
			//$(window).on("scroll", this.scrollWindow.bind(this));
			$(window).on("rerenderList", this.rerenderList.bind(this));

			var sortBy = this.props.sortBy;
			this.setState({
				"sortBy": sortBy
			});

			// load the channels
			this.loadData(this.props);
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			//$(window).off("scroll");
			$(window).off("changeSort");
			$(window).off("rerenderList");

			_storesChannelStore2["default"].unlisten(this.onChange);
		}

		// COMPOENTNT WILL RECEIVE PROPS
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {

			//console.log("componentWillReceiveProps", this.props, nextProps);
			if (this.props.sortBy !== nextProps.sortBy) {
				this.loadData(nextProps);
			}
		}

		// LOAD
	}, {
		key: "loadData",
		value: function loadData(nextProps) {

			document.title = "Sailing Channels";
			$("meta[name='description']").attr("content", "A compiled list of YouTube channels that are related to sailing or living aboard a sailboat.");

			this.setState({
				channels: [],
				skip: 0,
				take: 5,
				loading: false
			});

			_actionsChannelActions2["default"].getChannels(nextProps.sortBy, 0, 5);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// LOAD MORE
	}, {
		key: "loadMore",
		value: function loadMore() {

			if (this.state.loading === false) {
				this.setState({
					"loading": true
				});

				// load more data
				_actionsChannelActions2["default"].getChannels(this.props.sortBy, this.state.skip + this.state.take, 25);
			}
		}

		// RERENDER LIST
	}, {
		key: "rerenderList",
		value: function rerenderList() {
			this.loadData(this.props);
		}

		// CHANGE SORT
	}, {
		key: "changeSort",
		value: function changeSort(e, data) {

			this.setState({
				sortBy: data.sortBy
			});

			// load the channels
			this.props.history.replaceState(null, "/by-" + data.sortBy);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			// no channels found
			if (this.state.channels.length === 0) {
				return _react2["default"].createElement(
					"div",
					{ className: "row" },
					_react2["default"].createElement("div", { className: "col-md-1" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-10" },
						_react2["default"].createElement(
							"center",
							null,
							"Loading channels..."
						)
					),
					_react2["default"].createElement("div", { className: "col-md-1" })
				);
			}

			// channels where found
			return _react2["default"].createElement(
				"div",
				{ className: "row" },
				_react2["default"].createElement("div", { className: "col-md-1" }),
				_react2["default"].createElement(
					"div",
					{ className: "col-md-10" },
					_react2["default"].createElement(
						_reactInfinite2["default"],
						{ useWindowAsScrollContainer: true, elementHeight: 230, infiniteLoadBeginEdgeOffset: 230, onInfiniteLoad: this.loadMore.bind(this) },
						this.state.channels.map(function (c) {
							return _react2["default"].createElement(_ChannelListItem2["default"], { key: "cli-" + c.id, channel: c, sortBy: _this.state.sortBy });
						})
					)
				),
				_react2["default"].createElement("div", { className: "col-md-1" })
			);
		}
	}]);

	return ChannelList;
})(_react2["default"].Component);

exports["default"] = ChannelList;
module.exports = exports["default"];

},{"../actions/ChannelActions":2,"../stores/ChannelStore":55,"./ChannelListItem":19,"react":"react","react-infinite":"react-infinite"}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Description = require("./Description");

var _Description2 = _interopRequireDefault(_Description);

var _reactRouter = require("react-router");

var _SubscribeButton = require("./SubscribeButton");

var _SubscribeButton2 = _interopRequireDefault(_SubscribeButton);

var _reactLazyload = require("react-lazyload");

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

var ChannelListItem = (function (_React$Component) {
	_inherits(ChannelListItem, _React$Component);

	function ChannelListItem() {
		_classCallCheck(this, ChannelListItem);

		_get(Object.getPrototypeOf(ChannelListItem.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(ChannelListItem, [{
		key: "formatDate",

		// FORMAT DATE
		value: function formatDate(unix) {
			var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var d = new Date(unix * 1000);
			return m[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
		}

		// SHOULD COMPOENENT UPDATE
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			return nextProps.channel.id !== this.props.channel.id;
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "row channel-row" },
				_react2["default"].createElement(
					"div",
					{ className: "col-md-2 col-sm-2 col-xs-3" },
					_react2["default"].createElement(
						"center",
						null,
						_react2["default"].createElement(
							_reactLazyload2["default"],
							{ once: true },
							_react2["default"].createElement("img", {
								src: this.props.channel.thumbnail,
								className: "channel-thumb"
							})
						)
					)
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-md-7 col-sm-6 col-xs-9" },
					_react2["default"].createElement(
						"h3",
						null,
						_react2["default"].createElement(
							_reactRouter.Link,
							{ to: "/channel/" + this.props.channel.id },
							this.props.channel.title
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "hidden-xs" },
						this.props.channel.description ? _react2["default"].createElement("p", {
							className: "channel-description",
							dangerouslySetInnerHTML: {
								__html: anchorme.js(this.props.channel.description, { target: "_blank" })
							}
						}) : null
					)
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-md-3 col-sm-4 col-xs-10 col-xs-offset-3 col-md-offset-0 col-sm-offset-0" },
					this.props.channel.subscribersHidden === true ? _react2["default"].createElement(
						"p",
						{ className: "text-muted" },
						_react2["default"].createElement(
							"b",
							null,
							"Subscriber info hidden"
						)
					) : null,
					this.props.channel.subscribersHidden === false ? _react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(
							"b",
							null,
							"Subscribers:"
						),
						" ",
						this.props.channel.subscribers.toLocaleString()
					) : null,
					_react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(
							"b",
							null,
							"Views:"
						),
						" ",
						this.props.channel.views.toLocaleString()
					),
					this.props.channel.subscribersHidden === false ? _react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(
							"b",
							null,
							"Videos:"
						),
						" ",
						this.props.channel.videoCount.toLocaleString()
					) : null,
					this.props.channel.lastUploadAt ? _react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(
							"b",
							null,
							"Last upload:"
						),
						" ",
						$.timeago(new Date(this.props.channel.lastUploadAt * 1000))
					) : "",
					_react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(
							"b",
							null,
							"Founded:"
						),
						" ",
						this.formatDate(this.props.channel.publishedAt)
					),
					_react2["default"].createElement(_SubscribeButton2["default"], { channel: this.props.channel })
				)
			);
		}
	}]);

	return ChannelListItem;
})(_react2["default"].Component);

exports["default"] = ChannelListItem;
module.exports = exports["default"];

},{"./Description":23,"./SubscribeButton":40,"react":"react","react-lazyload":164,"react-router":"react-router"}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _helpersHttp = require("../helpers/http");

var _helpersHttp2 = _interopRequireDefault(_helpersHttp);

var _SuggestChannelsList = require("./SuggestChannelsList");

var _SuggestChannelsList2 = _interopRequireDefault(_SuggestChannelsList);

var ChannelMissingTester = (function (_Component) {
	_inherits(ChannelMissingTester, _Component);

	// CONSTRUCTOR

	function ChannelMissingTester(props) {
		_classCallCheck(this, ChannelMissingTester);

		_get(Object.getPrototypeOf(ChannelMissingTester.prototype), "constructor", this).call(this, props);
		this.state = {
			channelValue: "",
			checkChannelResult: null,
			checking: false
		};
	}

	// HANDLE CHANGE

	_createClass(ChannelMissingTester, [{
		key: "handleChange",
		value: function handleChange(event) {
			var _this = this;

			var v = event.target.value;

			this.setState({
				channelValue: v,
				checking: v.length > 0,
				checkChannelResult: null
			});

			new _helpersHttp2["default"]().post({
				url: "/api/channels/identify",
				data: JSON.stringify({
					hints: [v]
				}),
				headers: {
					"Content-Type": "application/json"
				},
				type: "POST",
				dataType: "json",
				cache: false
			}, function (err, data) {
				if (err || !data) {
					_this.setState({
						checkChannelResult: null,
						channel: null,
						checking: false
					});
				} else {
					if (data[0].src === null) {
						_this.setState({
							checkChannelResult: false,
							channel: null,
							checking: false
						});
					} else {
						_this.setState({
							checkChannelResult: data[0].src === "db",
							channel: data[0],
							checking: false
						});
					}
				}
			});
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					"center",
					null,
					_react2["default"].createElement("input", {
						type: "text",
						placeholder: "https://youtube.com/channel/...",
						style: { width: "80%" },
						className: "form-control",
						value: this.state.channelValue,
						onChange: this.handleChange.bind(this)
					}),
					this.state.checking ? _react2["default"].createElement(
						"p",
						null,
						"Checking..."
					) : null
				),
				this.state.checkChannelResult === false ? _react2["default"].createElement(_SuggestChannelsList2["default"], { channels: [this.state.channel] }) : null,
				this.state.checkChannelResult === true ? _react2["default"].createElement(
					"p",
					{ className: "text text-success" },
					"Well, this channel is already listed:",
					" ",
					_react2["default"].createElement(
						_reactRouter.Link,
						{ to: "/channel/" + this.state.channel._id },
						this.state.channel.data.title
					)
				) : null,
				this.state.checkChannelResult === false ? _react2["default"].createElement(
					"p",
					{ className: "text text-warning" },
					"This is not a valid YouTube channel!"
				) : null
			);
		}
	}]);

	return ChannelMissingTester;
})(_react.Component);

exports["default"] = ChannelMissingTester;
module.exports = exports["default"];

},{"../helpers/http":51,"./SuggestChannelsList":45,"react":"react","react-router":"react-router"}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var Contributions = (function (_React$Component) {
	_inherits(Contributions, _React$Component);

	function Contributions() {
		_classCallCheck(this, Contributions);

		_get(Object.getPrototypeOf(Contributions.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Contributions, [{
		key: "componentDidMount",

		// COMPONENT DID MOUNT
		value: function componentDidMount() {
			document.title = "Contributions | Sailing Channels";
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(_OffsetSocial2["default"], null),
				_react2["default"].createElement(_Logo2["default"], null),
				_react2["default"].createElement(_OffsetMenu2["default"], null),
				_react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"h1",
							{ className: "content-h1" },
							"Contributions"
						),
						_react2["default"].createElement(
							"p",
							null,
							"This is the place where we want to thank all of you for your great feedback regarding this site. Some of you have submitted ideas and improvements that made it on the todo list and are already implemented or fixed:"
						),
						_react2["default"].createElement(
							"table",
							{ className: "table" },
							_react2["default"].createElement(
								"thead",
								null,
								_react2["default"].createElement(
									"tr",
									null,
									_react2["default"].createElement(
										"th",
										null,
										"Suggestion"
									),
									_react2["default"].createElement(
										"th",
										{ className: "by-col" },
										"By"
									)
								)
							),
							_react2["default"].createElement(
								"tbody",
								null,
								_react2["default"].createElement(
									"tr",
									null,
									_react2["default"].createElement(
										"td",
										null,
										"Feature: A way to filter by language of the channel"
									),
									_react2["default"].createElement(
										"td",
										null,
										_react2["default"].createElement(
											"a",
											{ href: "https://www.youtube.com/channel/UCUMEKlaxhujH5r6sAVViTGw", target: "_blank" },
											"Norman Boyes"
										)
									)
								),
								_react2["default"].createElement(
									"tr",
									null,
									_react2["default"].createElement(
										"td",
										null,
										"Feature: Sort channels by total views"
									),
									_react2["default"].createElement(
										"td",
										null,
										_react2["default"].createElement(
											"a",
											{ href: "https://sailing-channels.com/channel/UCvLc83k5o11EIF1lEo0VmuQ", target: "_blank" },
											"Brian, SV Delos"
										)
									)
								),
								_react2["default"].createElement(
									"tr",
									null,
									_react2["default"].createElement(
										"td",
										null,
										"Bug report: Website (scrolling) slows down drastically when loading lots of channels"
									),
									_react2["default"].createElement(
										"td",
										null,
										_react2["default"].createElement(
											"a",
											{ href: "https://www.youtube.com/user/steedharold", target: "_blank" },
											"Harold Steed"
										)
									)
								),
								_react2["default"].createElement(
									"tr",
									null,
									_react2["default"].createElement(
										"td",
										null,
										"Feature: Show vessel position that belongs to a channel on a map"
									),
									_react2["default"].createElement(
										"td",
										null,
										_react2["default"].createElement(
											"a",
											{ href: "https://sailing-channels.com/channel/UCpfax0gLoUZMqw-ROxX77Yw", target: "_blank" },
											"Drake Paragon"
										)
									)
								),
								_react2["default"].createElement(
									"tr",
									null,
									_react2["default"].createElement(
										"td",
										null,
										"Feature: Sort channels by currently popular channels, see what's trending."
									),
									_react2["default"].createElement(
										"td",
										null,
										_react2["default"].createElement(
											"a",
											{ href: "https://www.sailing-channels.com/channel/UC6ZRBkwBQBrEOQQKwGi85gQ", target: "_blank" },
											"Kismet Adventures"
										)
									)
								),
								_react2["default"].createElement(
									"tr",
									null,
									_react2["default"].createElement(
										"td",
										null,
										"Improvement: Implementing a subscriber threshold that channels have to reach in order to be listed on the \"trending\" page.",
										_react2["default"].createElement("br", null),
										_react2["default"].createElement(
											"i",
											null,
											"(Ed.: The threshold is now the median value of the subscriber distribution of all listed channels.)"
										)
									),
									_react2["default"].createElement(
										"td",
										null,
										_react2["default"].createElement(
											"a",
											{ href: "https://sailing-channels.com/channel/UC8dsJQ_9CEwRmur_HFSXezA", target: "_blank" },
											"The Corsair"
										)
									)
								),
								_react2["default"].createElement(
									"tr",
									null,
									_react2["default"].createElement(
										"td",
										null,
										"Improvement: Set \"Last upload\" as default sorting option to facilitate attention to a broader variety of channels."
									),
									_react2["default"].createElement(
										"td",
										null,
										_react2["default"].createElement(
											"a",
											{ href: "https://sailing-channels.com/channel/UCu08YiFDAiIxl4xJDveTdJw", target: "_blank" },
											"Mount Ocean"
										)
									)
								)
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				)
			);
		}
	}]);

	return Contributions;
})(_react2["default"].Component);

exports["default"] = Contributions;
module.exports = exports["default"];

},{"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"react":"react"}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var DataCollection = (function (_React$Component) {
	_inherits(DataCollection, _React$Component);

	function DataCollection() {
		_classCallCheck(this, DataCollection);

		_get(Object.getPrototypeOf(DataCollection.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(DataCollection, [{
		key: "componentDidMount",

		// COMPONENT DID MOUNT
		value: function componentDidMount() {
			document.title = "How does this work? | Sailing Channels";
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(_OffsetSocial2["default"], null),
				_react2["default"].createElement(_Logo2["default"], null),
				_react2["default"].createElement(_OffsetMenu2["default"], null),
				_react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"h1",
							{ className: "content-h1" },
							"How does this work?"
						),
						_react2["default"].createElement(
							"p",
							null,
							"Well basically what this website does is list youtube channels that are related to sailing, circumnavigation or people living aboard their boats."
						),
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement(
								"p",
								null,
								"~"
							)
						),
						_react2["default"].createElement(
							"p",
							null,
							"The channels are discovered by doing a network analysis. Basically finding out who subscribed to whom."
						),
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement(
								"p",
								null,
								"~"
							)
						),
						_react2["default"].createElement(
							"p",
							null,
							"The algorithm uses a (super secret) starting channel and scans all subscriptions of this channel. The next step is recursively scanning all subscriptions of the subscriptions of the starting channel and so on."
						),
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement("iframe", { className: "intro-video", width: "100%", height: "315", src: "https://www.youtube.com/embed/RWosJPnB900?start=53", frameBorder: "0", allowFullScreen: true })
						),
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement("iframe", { className: "intro-video", width: "100%", height: "315", src: "https://www.youtube.com/embed/WFuSJj3v7PM", frameBorder: "0", allowFullScreen: true })
						),
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement("iframe", { className: "intro-video", width: "100%", height: "315", src: "https://www.youtube.com/embed/5PXhfW7j2m8", frameBorder: "0", allowFullScreen: true })
						)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				)
			);
		}
	}]);

	return DataCollection;
})(_react2["default"].Component);

exports["default"] = DataCollection;
module.exports = exports["default"];

},{"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"react":"react"}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Description = require("./Description");

var _Description2 = _interopRequireDefault(_Description);

var ChannelListItem = (function (_React$Component) {
    _inherits(ChannelListItem, _React$Component);

    // CONSTRUCTOR

    function ChannelListItem(props) {
        _classCallCheck(this, ChannelListItem);

        _get(Object.getPrototypeOf(ChannelListItem.prototype), "constructor", this).call(this, props);
        this.state = {
            "more": false
        };
    }

    // TEXT CUTTER

    _createClass(ChannelListItem, [{
        key: "textCutter",
        value: function textCutter(i, text) {

            if (text.length < i || this.state.more === true) return text;

            var shorter = text.substr(0, i);
            if (/^\S/.test(text.substr(i))) {
                return shorter.replace(/\s+\S*$/, "");
            }

            return shorter;
        }

        // TOGGLE MORE
    }, {
        key: "toggleMore",
        value: function toggleMore() {
            this.setState({
                "more": !this.state.more
            });
        }

        // RENDER
    }, {
        key: "render",
        value: function render() {

            var l = this.props.maxLength ? parseInt(this.props.maxLength) : 250;

            // more is active, show "less" button
            var moreOrLessTxt = this.state.more === true ? "less" : "more";
            var descriptionTxt = this.textCutter(l, this.props.text);

            // show a more or less button
            var moreOrLess;
            if (descriptionTxt.length !== this.props.text.length || this.state.more === true) {
                moreOrLess = _react2["default"].createElement(
                    "a",
                    { href: "javascript:void(0);", onClick: this.toggleMore.bind(this) },
                    "[",
                    moreOrLessTxt,
                    "]"
                );
            }

            return _react2["default"].createElement(
                "p",
                { className: "channel-description" },
                _react2["default"].createElement("span", { dangerouslySetInnerHTML: { __html: anchorme.js(descriptionTxt, { target: "_blank" }) } }),
                " ",
                moreOrLess
            );
        }
    }]);

    return ChannelListItem;
})(_react2["default"].Component);

exports["default"] = ChannelListItem;
module.exports = exports["default"];

},{"./Description":23,"react":"react"}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var FlagButton = (function (_React$Component) {
	_inherits(FlagButton, _React$Component);

	// CONSTRUCTOR

	function FlagButton(props) {
		_classCallCheck(this, FlagButton);

		_get(Object.getPrototypeOf(FlagButton.prototype), "constructor", this).call(this, props);
		this.state = {
			"pressed": Cookies.get("flagged." + this.props.channel.id) || false,
			"loggedIn": !!Cookies.get("me")
		};
	}

	// FLAG

	_createClass(FlagButton, [{
		key: "flag",
		value: function flag() {

			// send flag request to server
			$.post("/api/channel/flag", {
				"channel": this.props.channel.id
			});

			// store global state in cookie
			Cookies.set("flagged." + this.props.channel.id, "true");

			// store local state
			this.setState({
				"pressed": true
			});
		}

		// COMPONENT WILL RECEIVE PROPS
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {

			this.setState({
				"pressed": Cookies.get("flagged." + nextProps.channel.id) || false,
				"loggedIn": !!Cookies.get("me")
			});
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			// not logged in, so function not available
			if (!this.state.loggedIn) {
				return null;
			}

			if (this.state.pressed === true || this.state.pressed === "true") {

				return _react2["default"].createElement(
					"span",
					{ className: "text-muted" },
					_react2["default"].createElement("i", { className: "fa fa-check fa-fw" }),
					" Flagged as not sailing-related"
				);
			} else {

				return _react2["default"].createElement(
					"a",
					{ href: "javascript:void();", onClick: this.flag.bind(this) },
					_react2["default"].createElement("i", { className: "fa fa-flag fa-fw" }),
					" Flag as not sailing-related"
				);
			}
		}
	}]);

	return FlagButton;
})(_react2["default"].Component);

exports["default"] = FlagButton;
module.exports = exports["default"];

},{"react":"react"}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(App, [{
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ className: "container footer" },
				_react2["default"].createElement(
					"center",
					null,
					_react2["default"].createElement(
						_reactRouter.Link,
						{ to: "/imprint" },
						"Imprint"
					),
					" | ",
					_react2["default"].createElement(
						_reactRouter.Link,
						{ to: "/privacy" },
						"Privacy Policy"
					),
					" | ",
					_react2["default"].createElement(
						"a",
						{ href: "https://github.com/sailingchannels", target: "_blank" },
						"Code on GitHub"
					)
				)
			);
		}
	}]);

	return App;
})(_react2["default"].Component);

exports["default"] = App;
module.exports = exports["default"];

},{"react":"react","react-router":"react-router"}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ChannelList = require("./ChannelList");

var _ChannelList2 = _interopRequireDefault(_ChannelList);

var _SearchBar = require("./SearchBar");

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _BannerDialog = require("./BannerDialog");

var _BannerDialog2 = _interopRequireDefault(_BannerDialog);

var _SignInDialog = require("./SignInDialog");

var _SignInDialog2 = _interopRequireDefault(_SignInDialog);

var _reactCookie = require("react-cookie");

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _reactRouter = require("react-router");

var Home = (function (_React$Component) {
	_inherits(Home, _React$Component);

	// CONSTRUCTOR

	function Home(props) {
		_classCallCheck(this, Home);

		_get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this, props);
		this.state = {
			showScrollUp: false,
			me: _reactCookie2["default"].load("me") ? JSON.parse(_reactCookie2["default"].load("me").replace("j:", "")) : null
		};
	}

	// COMPONENT DID MOUNT

	_createClass(Home, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			$(window).on("scroll", this.onWindowScroll.bind(this));
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			$(window).off("scroll");
		}

		// ON WINDOW SCROLL
	}, {
		key: "onWindowScroll",
		value: function onWindowScroll() {
			// did the scrollup state change?
			if (this.state.showScrollUp !== $(window).scrollTop() > 100) {
				// do or do not show scrollup button
				this.setState({
					showScrollUp: $(window).scrollTop() > 100
				});
			}
		}

		// SCROLL UP
	}, {
		key: "scrollUp",
		value: function scrollUp() {
			window.scrollTo(0, 0);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			var sortBy = this.props.params.sortBy || "upload";
			var scrollUp = null;

			if (this.state.showScrollUp === true) {
				scrollUp = _react2["default"].createElement(
					"div",
					{
						className: "scroll-up-btn",
						title: "Scroll to top",
						onClick: this.scrollUp.bind(this)
					},
					_react2["default"].createElement("i", { className: "fa fa-arrow-circle-up fa-3x" })
				);
			}

			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(_OffsetSocial2["default"], null),
				_react2["default"].createElement(_Logo2["default"], null),
				!this.state.me ? _react2["default"].createElement(
					"center",
					null,
					_react2["default"].createElement(
						"a",
						{
							href: "/oauth2callback",
							className: "btn btn-raised btn-sm btn-danger yt-login"
						},
						"Sign In with ",
						_react2["default"].createElement("i", { className: "fa fa-youtube" }),
						" YouTube"
					),
					_react2["default"].createElement(
						_reactRouter.Link,
						{
							className: "btn btn-link show btn-more-info",
							to: "/signin"
						},
						"More info"
					)
				) : null,
				_react2["default"].createElement(_OffsetMenu2["default"], null),
				scrollUp,
				_react2["default"].createElement(_SearchBar2["default"], { sortBy: sortBy, history: this.props.history }),
				_react2["default"].createElement(_ChannelList2["default"], { sortBy: sortBy, history: this.props.history }),
				this.props.children,
				_react2["default"].createElement(_BannerDialog2["default"], null),
				_react2["default"].createElement(_SignInDialog2["default"], null)
			);
		}
	}]);

	return Home;
})(_react2["default"].Component);

exports["default"] = Home;
module.exports = exports["default"];

},{"./BannerDialog":16,"./ChannelList":18,"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"./SearchBar":36,"./SignInDialog":39,"react":"react","react-cookie":"react-cookie","react-router":"react-router"}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
                  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var Imprint = (function (_React$Component) {
                  _inherits(Imprint, _React$Component);

                  function Imprint() {
                                    _classCallCheck(this, Imprint);

                                    _get(Object.getPrototypeOf(Imprint.prototype), "constructor", this).apply(this, arguments);
                  }

                  _createClass(Imprint, [{
                                    key: "componentDidMount",

                                    // COMPONENT DID MOUNT
                                    value: function componentDidMount() {
                                                      document.title = "Impressum | Sailing Channels";
                                    }

                                    // RENDER
                  }, {
                                    key: "render",
                                    value: function render() {

                                                      return _react2["default"].createElement(
                                                                        "div",
                                                                        { className: "container" },
                                                                        _react2["default"].createElement(_OffsetSocial2["default"], null),
                                                                        _react2["default"].createElement(_Logo2["default"], null),
                                                                        _react2["default"].createElement(_OffsetMenu2["default"], null),
                                                                        _react2["default"].createElement(
                                                                                          "div",
                                                                                          { className: "row content-row" },
                                                                                          _react2["default"].createElement("div", { className: "col-md-3" }),
                                                                                          _react2["default"].createElement(
                                                                                                            "div",
                                                                                                            { className: "col-md-6" },
                                                                                                            _react2["default"].createElement(
                                                                                                                              "h1",
                                                                                                                              { className: "content-h1" },
                                                                                                                              "Imprint"
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "p",
                                                                                                                              null,
                                                                                                                              "The following information (Imprint) is required under German law."
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "p",
                                                                                                                              null,
                                                                                                                              "Responsible for this site:"
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "p",
                                                                                                                              null,
                                                                                                                              _react2["default"].createElement(
                                                                                                                                                "span",
                                                                                                                                                { className: "reverse" },
                                                                                                                                                "nnameggürB samohT"
                                                                                                                              ),
                                                                                                                              _react2["default"].createElement("br", null),
                                                                                                                              _react2["default"].createElement(
                                                                                                                                                "span",
                                                                                                                                                { className: "reverse" },
                                                                                                                                                "9 pmakrefoH"
                                                                                                                              ),
                                                                                                                              _react2["default"].createElement("br", null),
                                                                                                                              _react2["default"].createElement(
                                                                                                                                                "span",
                                                                                                                                                { className: "reverse" },
                                                                                                                                                "nesreiV 15714"
                                                                                                                              ),
                                                                                                                              _react2["default"].createElement("br", null),
                                                                                                                              _react2["default"].createElement(
                                                                                                                                                "span",
                                                                                                                                                { className: "reverse" },
                                                                                                                                                "moc.slennahc-gnilias@yoha"
                                                                                                                              ),
                                                                                                                              _react2["default"].createElement("br", null)
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "center",
                                                                                                                              null,
                                                                                                                              _react2["default"].createElement(
                                                                                                                                                "p",
                                                                                                                                                null,
                                                                                                                                                "~"
                                                                                                                              )
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "h3",
                                                                                                                              null,
                                                                                                                              "Legal disclaimer"
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "p",
                                                                                                                              null,
                                                                                                                              "The contents of these pages are generated automatically based on the YouTube channel title, description and videos of the individual channels listed. The creator of this website has no influence on the content of the channel descriptions or other channel related texts. Also, The creator of this website cannot assume liability for the timeless accuracy and completeness of the information. This website contains links to external websites. As the contents of these third-party websites are beyond my control, I cannot accept liability for them. ResponsibiIity for the contents of the linked pages is always held by the provider or operator of the pages."
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "center",
                                                                                                                              null,
                                                                                                                              _react2["default"].createElement(
                                                                                                                                                "p",
                                                                                                                                                null,
                                                                                                                                                "~"
                                                                                                                              )
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "h3",
                                                                                                                              null,
                                                                                                                              "Data protection"
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "p",
                                                                                                                              null,
                                                                                                                              "In general, when visiting the website of “Sailing Channels”, no personal data are saved. No data will be passed on to third parties without your consent. We point out that in regard to unsecured data transmission in the internet (e.g. via email), security cannot be guaranteed. Such data could possibIy be accessed by third parties."
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "center",
                                                                                                                              null,
                                                                                                                              _react2["default"].createElement(
                                                                                                                                                "p",
                                                                                                                                                null,
                                                                                                                                                "~"
                                                                                                                              )
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "h3",
                                                                                                                              null,
                                                                                                                              "Google Analytics"
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "p",
                                                                                                                              null,
                                                                                                                              "This website uses Google Analytics, a web analytics service provided by Google, Inc. (»Google«). Google Analytics uses cookies, which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. On this website the IP anonymization feature is activated. As a result Google will truncate/anonymize the last octet of the IP address for Member States of the European Union as well as for other parties to the Agreement on the European Economic Area. Only in exceptional cases, the full IP address is sent to and shortened by Google servers in the USA. On behalf of the website provider Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage to the website provider. Google will not associate your IP address with any other data held by Google. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above."
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "center",
                                                                                                                              null,
                                                                                                                              _react2["default"].createElement(
                                                                                                                                                "p",
                                                                                                                                                null,
                                                                                                                                                "~"
                                                                                                                              )
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "h4",
                                                                                                                              null,
                                                                                                                              "How to prevent being tracked by Google Analytics on sailing-channels.com"
                                                                                                            ),
                                                                                                            _react2["default"].createElement(
                                                                                                                              "ul",
                                                                                                                              null,
                                                                                                                              _react2["default"].createElement(
                                                                                                                                                "li",
                                                                                                                                                null,
                                                                                                                                                "You may refuse the use of cookies by selecting the appropriate settings on your browser. However, please note that if you do this, you may not be able to use the full functionality of this website."
                                                                                                                              ),
                                                                                                                              _react2["default"].createElement(
                                                                                                                                                "li",
                                                                                                                                                null,
                                                                                                                                                "Furthermore you can prevent Google’s collection and use of data (cookies and IP address) by downloading and installing the browser plug-in available under ",
                                                                                                                                                _react2["default"].createElement(
                                                                                                                                                                  "a",
                                                                                                                                                                  { href: "https://tools.google.com/dlpage/gaoptout?hl=en", target: "_blank" },
                                                                                                                                                                  "https://tools.google.com/dlpage/gaoptout?hl=en"
                                                                                                                                                )
                                                                                                                              )
                                                                                                            )
                                                                                          ),
                                                                                          _react2["default"].createElement("div", { className: "col-md-3" })
                                                                        )
                                                      );
                                    }
                  }]);

                  return Imprint;
})(_react2["default"].Component);

exports["default"] = Imprint;
module.exports = exports["default"];

},{"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"react":"react"}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionsLanguageActions = require("../actions/LanguageActions");

var _actionsLanguageActions2 = _interopRequireDefault(_actionsLanguageActions);

var _storesLanguageStore = require("../stores/LanguageStore");

var _storesLanguageStore2 = _interopRequireDefault(_storesLanguageStore);

var LanguagePicker = (function (_React$Component) {
	_inherits(LanguagePicker, _React$Component);

	// CONSTRUCTOR

	function LanguagePicker(props) {
		_classCallCheck(this, LanguagePicker);

		_get(Object.getPrototypeOf(LanguagePicker.prototype), "constructor", this).call(this, props);
		this.state = _storesLanguageStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(LanguagePicker, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesLanguageStore2["default"].listen(this.onChange);

			_actionsLanguageActions2["default"].getLanguages();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesLanguageStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// SET LANGUAGE
	}, {
		key: "setLanguage",
		value: function setLanguage(e) {
			Cookies.set("channel-language", e.target.value);
			this.setState({
				"selectedLanguage": e.target.value
			});

			// make channel list rerender
			$(window).trigger("rerenderList");
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"select",
				{ className: "form-control language-picker", "data-dropdownjs": "true", value: this.state.selectedLanguage, onChange: this.setLanguage.bind(this) },
				this.state.languages.map(function (l) {
					return _react2["default"].createElement(
						"option",
						{ key: l.code, value: l.code },
						l.name
					);
				})
			);
		}
	}]);

	return LanguagePicker;
})(_react2["default"].Component);

exports["default"] = LanguagePicker;
module.exports = exports["default"];

},{"../actions/LanguageActions":3,"../stores/LanguageStore":56,"react":"react"}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var Login = (function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login() {
		_classCallCheck(this, Login);

		_get(Object.getPrototypeOf(Login.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Login, [{
		key: "componentDidMount",

		// COMPONENT DID MOUNT
		value: function componentDidMount() {
			document.title = "Sign In | Sailing Channels";
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(_OffsetSocial2["default"], null),
				_react2["default"].createElement(_Logo2["default"], null),
				_react2["default"].createElement(_OffsetMenu2["default"], null),
				_react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-4" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-4" },
						_react2["default"].createElement(
							"h1",
							{ className: "content-h1" },
							"SignIn"
						),
						_react2["default"].createElement(
							"p",
							null,
							"To provide you with an awesome tailored user interface, you can sign in with your YouTube account."
						),
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement(
								"p",
								null,
								"~"
							)
						),
						_react2["default"].createElement(
							"p",
							null,
							"sailing-channels.com",
							" ",
							_react2["default"].createElement(
								"u",
								null,
								"does not publish anything on your behalf nor does it track or share your data"
							),
							"."
						),
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement(
								"p",
								null,
								"~"
							)
						),
						_react2["default"].createElement(
							"p",
							null,
							_react2["default"].createElement(
								"b",
								null,
								"Cool stuff you can do, when signed in:"
							),
							_react2["default"].createElement(
								"ul",
								null,
								_react2["default"].createElement(
									"li",
									null,
									"Manage subscribtions directly from list view"
								),
								_react2["default"].createElement(
									"li",
									null,
									"Flag channels as not sailing-related"
								),
								_react2["default"].createElement(
									"li",
									null,
									"Suggest channels to the list"
								)
							)
						),
						_react2["default"].createElement(
							"p",
							null,
							_react2["default"].createElement(
								"b",
								null,
								"Even cooler stuff you can do, when signed in and your channel is listed:"
							),
							_react2["default"].createElement(
								"ul",
								null,
								_react2["default"].createElement(
									"li",
									null,
									"View your detailed channel profile page"
								),
								_react2["default"].createElement(
									"li",
									null,
									"Display AIS position on a map"
								)
							)
						),
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement(
								"p",
								null,
								"~"
							)
						),
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement(
								"a",
								{
									href: "/oauth2callback",
									className: "btn btn-danger btn-lg btn-raised"
								},
								"Sign In with ",
								_react2["default"].createElement("i", { className: "fa fa-youtube" }),
								" ",
								"YouTube"
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-4" })
				)
			);
		}
	}]);

	return Login;
})(_react2["default"].Component);

exports["default"] = Login;
module.exports = exports["default"];

},{"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"react":"react"}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var Logo = (function (_React$Component) {
	_inherits(Logo, _React$Component);

	function Logo() {
		_classCallCheck(this, Logo);

		_get(Object.getPrototypeOf(Logo.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Logo, [{
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ className: "logo" },
				_react2["default"].createElement(
					_reactRouter.Link,
					{ to: "/" },
					_react2["default"].createElement(
						"div",
						{ className: "turnaround" },
						_react2["default"].createElement("div", { className: "front" }),
						_react2["default"].createElement("div", { className: "back" })
					)
				)
			);
		}
	}]);

	return Logo;
})(_react2["default"].Component);

exports["default"] = Logo;
module.exports = exports["default"];

},{"react":"react","react-router":"react-router"}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _reactCookie = require("react-cookie");

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _actionsMeActions = require("../actions/MeActions");

var _actionsMeActions2 = _interopRequireDefault(_actionsMeActions);

var _storesMeStore = require("../stores/MeStore");

var _storesMeStore2 = _interopRequireDefault(_storesMeStore);

var _SubscriberHistoryChart = require("./SubscriberHistoryChart");

var _SubscriberHistoryChart2 = _interopRequireDefault(_SubscriberHistoryChart);

var _ViewsHistoryChart = require("./ViewsHistoryChart");

var _ViewsHistoryChart2 = _interopRequireDefault(_ViewsHistoryChart);

var _PositionMap = require("./PositionMap");

var _PositionMap2 = _interopRequireDefault(_PositionMap);

var Me = (function (_React$Component) {
	_inherits(Me, _React$Component);

	function Me(props) {
		_classCallCheck(this, Me);

		_get(Object.getPrototypeOf(Me.prototype), "constructor", this).call(this, props);

		this.state = _storesMeStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(Me, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			document.title = "Me | Sailing Channels";
			_storesMeStore2["default"].listen(this.onChange);
			_actionsMeActions2["default"].getMe();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesMeStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// SAFE PROFILE
	}, {
		key: "saveProfile",
		value: function saveProfile() {
			this.setState({
				"loading": true
			});

			// save the changes
			$.post("/api/me/profile", {
				"mmsi": parseInt($("#mmsi").val()),
				"inreach": $("#inreach").val(),
				"boatcolor": $("#boatcolor").val(),
				"trailnumber": parseInt(Math.min(99999, Math.max(0, parseInt($("#trailnumber").val()))))
			}).done(function () {
				location.reload();
			});
		}

		// SELECT EMBED CODE
	}, {
		key: "selectEmbedCode",
		value: function selectEmbedCode(e) {
			e.target.focus();
			e.target.select();
		}

		// CORRENT IN REACH USERNAME
	}, {
		key: "correctInReachUsername",
		value: function correctInReachUsername(e) {
			var $e = $(e.target);
			var s = $e.val().split("/");
			var username = s[s.length - 1];
			$e.val(username);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			if (!this.state.me.user) return null;
			var isChannelListed = this.state.me.channel;

			var profile = this.state.me.user.profile || null;
			var channelMapEmbedCode = "<iframe src=\"https://sailing-channels.com/map?channel=" + this.state.me.channel.id + "\" width=\"100%\" height=\"500px\" frameborder=\"0\"></iframe><p>Check out my YouTube channel on <a href=\"https://sailing-channels.com/channel/" + this.state.me.channel.id + "\" target=\"_blank\">https://sailing-channels.com/channel/" + this.state.me.channel.id + "</a></p>";

			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(_OffsetSocial2["default"], null),
				_react2["default"].createElement(_Logo2["default"], null),
				_react2["default"].createElement(_OffsetMenu2["default"], null),
				_react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"h1",
							{ className: "content-h1" },
							_react2["default"].createElement("img", { src: this.state.me.user.thumbnail, width: "50" }),
							" ",
							this.state.me.user.title
						),
						isChannelListed ? _react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement(
								"a",
								{ target: "_blank", href: "/channel/" + this.state.me.channel.id, className: "btn btn-default btn-raised btn-sm" },
								_react2["default"].createElement("i", { className: "fa fa-desktop" }),
								" Preview channel page"
							)
						) : null
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				),
				isChannelListed ? _react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"h3",
							null,
							"Statistics"
						),
						_react2["default"].createElement(
							"p",
							null,
							"See how well your channel is performing in the last 7 days:"
						),
						_react2["default"].createElement(
							"div",
							{ className: "row" },
							_react2["default"].createElement(
								"div",
								{ className: "col-md-6" },
								_react2["default"].createElement(
									"center",
									null,
									_react2["default"].createElement(
										"p",
										null,
										_react2["default"].createElement(
											"b",
											null,
											"Subscribers"
										)
									)
								),
								_react2["default"].createElement(_SubscriberHistoryChart2["default"], { channel: this.state.me.channel })
							),
							_react2["default"].createElement(
								"div",
								{ className: "col-md-6" },
								_react2["default"].createElement(
									"center",
									null,
									_react2["default"].createElement(
										"p",
										null,
										_react2["default"].createElement(
											"b",
											null,
											"Views"
										)
									)
								),
								_react2["default"].createElement(_ViewsHistoryChart2["default"], { channel: this.state.me.channel })
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				) : null,
				isChannelListed ? _react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"h4",
							null,
							"On sailing-channels.com"
						),
						_react2["default"].createElement(
							"p",
							null,
							_react2["default"].createElement(
								"b",
								null,
								"Today's channel views:"
							),
							" ",
							this.state.me.visits_channel
						),
						_react2["default"].createElement(
							"p",
							null,
							_react2["default"].createElement(
								"b",
								null,
								"Today's Video views:"
							),
							" ",
							this.state.me.visits_videos
						)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				) : null,
				isChannelListed ? _react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement("hr", null)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				) : null,
				isChannelListed ? _react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"h3",
							null,
							"AIS"
						),
						_react2["default"].createElement(
							"p",
							null,
							"In case you broadcast your positions via AIS, you can store your MMSI number here. Your position will be displayed on a map on your channel detail page."
						),
						_react2["default"].createElement(
							"div",
							{ className: "form-horizontal" },
							_react2["default"].createElement(
								"div",
								{ className: "form-group" },
								_react2["default"].createElement(
									"label",
									{ htmlFor: "mmsi", className: "col-sm-2 control-label" },
									"AIS MMSI"
								),
								_react2["default"].createElement(
									"div",
									{ className: "col-sm-10" },
									_react2["default"].createElement("input", { type: "number", className: "form-control", id: "mmsi", defaultValue: profile ? profile.mmsi : "", placeholder: "MMSI number" })
								)
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				) : null,
				isChannelListed ? _react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement("hr", null)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				) : null,
				isChannelListed ? _react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"h3",
							null,
							"DeLorme inReach"
						),
						_react2["default"].createElement(
							"p",
							null,
							"If you are using DeLorme's inReach satellite position tracking and share your position updates via the \"share\" page, type your username or the link to your shared map into the following field:"
						),
						_react2["default"].createElement(
							"div",
							{ className: "form-horizontal" },
							_react2["default"].createElement(
								"div",
								{ className: "form-group" },
								_react2["default"].createElement(
									"label",
									{ htmlFor: "mmsi", className: "col-sm-2 control-label" },
									"inReach Username"
								),
								_react2["default"].createElement(
									"div",
									{ className: "col-sm-10" },
									_react2["default"].createElement("input", { type: "text", className: "form-control", onBlur: this.correctInReachUsername.bind(this), id: "inreach", defaultValue: profile ? profile.inreach : "", placeholder: "https://share.delorme.com/username" })
								)
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				) : null,
				isChannelListed ? _react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement("hr", null)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				) : null,
				isChannelListed ? _react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"h3",
							null,
							"Your boat position"
						),
						_react2["default"].createElement(
							"div",
							{ className: "form-horizontal" },
							_react2["default"].createElement(
								"div",
								{ className: "form-group" },
								_react2["default"].createElement(
									"label",
									{ htmlFor: "boatcolor", className: "col-sm-2 control-label" },
									"Boat Color"
								),
								_react2["default"].createElement(
									"div",
									{ className: "col-sm-10" },
									_react2["default"].createElement("input", { type: "color", className: "form-control", id: "boatcolor", defaultValue: profile && profile.boatcolor ? profile.boatcolor : "#f1c40f", placeholder: "E.g. hull color" })
								)
							),
							_react2["default"].createElement(
								"div",
								{ className: "form-group" },
								_react2["default"].createElement(
									"label",
									{ htmlFor: "trailnumber", className: "col-sm-2 control-label" },
									"Show last positions"
								),
								_react2["default"].createElement(
									"div",
									{ className: "col-sm-10" },
									_react2["default"].createElement("input", { type: "number", className: "form-control", min: "0", max: "99999", step: "1", id: "trailnumber", defaultValue: profile && profile.trailnumber ? profile.trailnumber : "100" })
								)
							)
						),
						this.state.me.user.position ? _react2["default"].createElement(
							"div",
							null,
							_react2["default"].createElement(_PositionMap2["default"], { channel: this.state.me.channel.id }),
							_react2["default"].createElement(
								"p",
								null,
								" "
							),
							_react2["default"].createElement(
								"p",
								null,
								"Feel free to ",
								_react2["default"].createElement(
									"b",
									null,
									"embed the map"
								),
								" into your website via the following HTML code:",
								_react2["default"].createElement("textarea", { className: "embed-code-form-control form-control", rows: "4", value: channelMapEmbedCode, onClick: this.selectEmbedCode.bind(this) })
							)
						) : null
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				) : null,
				isChannelListed ? _react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement("hr", null)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				) : null,
				_react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"center",
							null,
							isChannelListed ? this.state.loading === true ? _react2["default"].createElement(
								"button",
								{ className: "btn btn-success btn-raised", disabled: "disabled" },
								_react2["default"].createElement("i", { className: "fa fa-spinner fa-pulse" })
							) : _react2["default"].createElement(
								"button",
								{ onClick: this.saveProfile.bind(this), className: "btn btn-success btn-raised" },
								_react2["default"].createElement("i", { className: "fa fa-check" }),
								" Save"
							) : null,
							" ",
							_react2["default"].createElement(
								"a",
								{ href: "/logout", className: "btn btn-default btn-raised" },
								_react2["default"].createElement("i", { className: "fa fa-power-off" }),
								" Sign Out"
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				)
			);
		}
	}]);

	return Me;
})(_react2["default"].Component);

exports["default"] = Me;
module.exports = exports["default"];
/* STATISTICS */ /* MMSI */ /* INREACH */ /* MAP */ /* CONTROLS */

},{"../actions/MeActions":4,"../stores/MeStore":57,"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"./PositionMap":34,"./SubscriberHistoryChart":41,"./ViewsHistoryChart":50,"react":"react","react-cookie":"react-cookie"}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _LanguagePicker = require("./LanguagePicker");

var _LanguagePicker2 = _interopRequireDefault(_LanguagePicker);

var OffsetMenu = (function (_React$Component) {
	_inherits(OffsetMenu, _React$Component);

	function OffsetMenu() {
		_classCallCheck(this, OffsetMenu);

		_get(Object.getPrototypeOf(OffsetMenu.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(OffsetMenu, [{
		key: "toggleMenu",

		// TOGGLE MENU
		value: function toggleMenu() {
			if ($(".offset-menu").find("ul").hasClass("hidden-xs")) {
				$(".offset-menu").find("ul").removeClass("hidden-xs");
				$(".offset-menu").addClass("cover-up");
				$(".logo, .search-row").css("opacity", 0);
			} else {
				$(".offset-menu").find("ul").addClass("hidden-xs");
				$(".offset-menu").removeClass("cover-up");
				$(".logo, .search-row").css("opacity", 1);
			}
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					"div",
					{ className: "offset-bars hidden-md hidden-lg hidden-sm" },
					_react2["default"].createElement(
						"div",
						{ onClick: this.toggleMenu.bind(this) },
						_react2["default"].createElement("i", { className: "fa fa-bars" })
					)
				),
				_react2["default"].createElement(
					"div",
					{ className: "offset-menu" },
					_react2["default"].createElement(
						"ul",
						{ className: "hidden-xs" },
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "/" },
								"Home"
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "/how-it-works" },
								"How does this work?"
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "/suggest" },
								_react2["default"].createElement(
									"span",
									{ className: "label label-success" },
									"New"
								),
								" ",
								"Suggest a channel"
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "/contributions" },
								"Contributions"
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								_reactRouter.Link,
								{ to: "/support" },
								"Support us"
							)
						),
						_react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(
								"div",
								{ className: "little-space" },
								"Channel language"
							),
							_react2["default"].createElement(_LanguagePicker2["default"], null)
						)
					)
				)
			);
		}
	}]);

	return OffsetMenu;
})(_react2["default"].Component);

exports["default"] = OffsetMenu;
module.exports = exports["default"];

},{"./LanguagePicker":28,"react":"react","react-router":"react-router"}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Footer = require("./Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _reactCookie = require("react-cookie");

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _reactRouter = require("react-router");

var _reactLazyload = require("react-lazyload");

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

var SocialOffset = (function (_React$Component) {
	_inherits(SocialOffset, _React$Component);

	function SocialOffset(props) {
		_classCallCheck(this, SocialOffset);

		_get(Object.getPrototypeOf(SocialOffset.prototype), "constructor", this).call(this, props);

		this.state = {
			me: _reactCookie2["default"].load("me") ? JSON.parse(_reactCookie2["default"].load("me").replace("j:", "")) : null,
			bannerdialog: !!_reactCookie2["default"].load("banner-dialog")
		};
	}

	// COMPONENT DID MOUNT

	_createClass(SocialOffset, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			$("#banner-dialog").on("hidden.bs.modal", this.modalClosed.bind(this));
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			$("#banner-dialog").on("hidden.bs.modal");
		}

		// REPLACE X
	}, {
		key: "replaceX",
		value: function replaceX(e) {
			var $e = $(e.target);
			if (!$e.attr("href")) {
				$e = $e.parents("[href]");
			}

			$e.attr("href", $e.attr("href").replace(/x/g, ""));
		}

		// REVEAL GREY
	}, {
		key: "revealGrey",
		value: function revealGrey(e) {
			$(e.target).removeClass("grey");
		}

		// ADD GREY
	}, {
		key: "addGrey",
		value: function addGrey(e) {
			$(e.target).addClass("grey");
		}

		// MODAL CLOSED
	}, {
		key: "modalClosed",
		value: function modalClosed() {
			this.setState({
				bannerdialog: true
			});

			//this.forceUpdate();
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			var profile = null;

			if (this.state.me) {
				if (!this.state.me.title || this.state.me.title === "") {
					profile = _react2["default"].createElement(
						"p",
						{ className: "profile-link" },
						_react2["default"].createElement(
							_reactRouter.Link,
							{ to: "/me" },
							"Your profile"
						)
					);
				} else {
					profile = _react2["default"].createElement(
						"p",
						{ className: "profile-link" },
						"Hi, ",
						_react2["default"].createElement(
							_reactRouter.Link,
							{ to: "/me" },
							this.state.me.title
						)
					);
				}
			}

			return _react2["default"].createElement(
				"div",
				{ className: "offset-social" },
				profile,
				_react2["default"].createElement(
					"div",
					{ className: "hidden-sm hidden-xs" },
					_react2["default"].createElement(
						"p",
						{ className: "sc-text" },
						"CONTACT",
						_react2["default"].createElement("br", null),
						"sailing-channels.com:"
					),
					_react2["default"].createElement(
						"a",
						{
							title: "Sailing Channels on Facebook",
							href: "https://www.fb.com/sailingchannels",
							target: "_blank",
							className: "social social-fb"
						},
						_react2["default"].createElement("i", { className: "fa fa-facebook-square fa-3x" })
					),
					_react2["default"].createElement("br", null),
					_react2["default"].createElement(
						"a",
						{
							title: "Sailing Channels on Twitter",
							href: "https://twitter.com/sailchannels",
							target: "_blank",
							className: "social social-tw"
						},
						_react2["default"].createElement("i", { className: "fa fa-twitter-square fa-3x" })
					),
					_react2["default"].createElement("br", null),
					_react2["default"].createElement(
						"a",
						{
							title: "E-Mail",
							href: "mailto:ahxoy@sailing-chaxnnels.com?subject=Ahoy sailor!",
							onMouseOver: this.replaceX.bind(this),
							className: "social social-em"
						},
						_react2["default"].createElement("i", { className: "fa fa-envelope-square fa-3x" })
					)
				),
				this.state.bannerdialog === true ? _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"div",
						{ className: "support-row hidden-sm hidden-xs" },
						_react2["default"].createElement(
							"p",
							{ className: "sc-text" },
							"SUPPORT",
							_react2["default"].createElement("br", null),
							"sailing-channels.com:"
						),
						_react2["default"].createElement(
							"div",
							null,
							_react2["default"].createElement(
								"a",
								{
									href: "https://www.patreon.com/sailingchannels",
									target: "_blank"
								},
								_react2["default"].createElement(
									_reactLazyload2["default"],
									{ height: "50" },
									_react2["default"].createElement("img", {
										src: "https://rawgit.com/sailingchannels/website/master/public/img/patreon.jpg",
										className: "grey support-img",
										height: "50",
										width: "50",
										onMouseOver: this.revealGrey.bind(this),
										onMouseOut: this.addGrey.bind(this)
									})
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ style: { marginTop: "10px" } },
							_react2["default"].createElement(
								"a",
								{
									href: "https://www.paypal.me/sailingchannels",
									target: "_blank"
								},
								_react2["default"].createElement(
									_reactLazyload2["default"],
									{ height: "50" },
									_react2["default"].createElement("img", {
										src: "https://rawgit.com/sailingchannels/website/master/public/img/paypal.png",
										className: "grey support-img",
										height: "50",
										width: "50",
										onMouseOver: this.revealGrey.bind(this),
										onMouseOut: this.addGrey.bind(this)
									})
								)
							)
						)
					)
				) : null
			);
		}
	}]);

	return SocialOffset;
})(_react2["default"].Component);

exports["default"] = SocialOffset;
module.exports = exports["default"];

},{"./Footer":25,"react":"react","react-cookie":"react-cookie","react-lazyload":164,"react-router":"react-router"}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var PositionMap = (function (_React$Component) {
	_inherits(PositionMap, _React$Component);

	function PositionMap() {
		_classCallCheck(this, PositionMap);

		_get(Object.getPrototypeOf(PositionMap.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(PositionMap, [{
		key: "render",

		// RENDER
		value: function render() {
			return _react2["default"].createElement("iframe", { frameBorder: "0", className: "position-map", src: "/map?channel=" + this.props.channel });
		}
	}]);

	return PositionMap;
})(_react2["default"].Component);

exports["default"] = PositionMap;
module.exports = exports["default"];

},{"react":"react","react-dom":"react-dom"}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
																		value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var PrivacyPolicy = (function (_React$Component) {
																		_inherits(PrivacyPolicy, _React$Component);

																		function PrivacyPolicy() {
																																				_classCallCheck(this, PrivacyPolicy);

																																				_get(Object.getPrototypeOf(PrivacyPolicy.prototype), "constructor", this).apply(this, arguments);
																		}

																		_createClass(PrivacyPolicy, [{
																																				key: "componentDidMount",

																																				// COMPONENT DID MOUNT
																																				value: function componentDidMount() {
																																																						document.title = "Privacy Policy | Sailing Channels";
																																				}

																																				// RENDER
																		}, {
																																				key: "render",
																																				value: function render() {

																																																						return _react2["default"].createElement(
																																																																								"div",
																																																																								{ className: "container" },
																																																																								_react2["default"].createElement(_OffsetSocial2["default"], null),
																																																																								_react2["default"].createElement(_Logo2["default"], null),
																																																																								_react2["default"].createElement(_OffsetMenu2["default"], null),
																																																																								_react2["default"].createElement(
																																																																																										"div",
																																																																																										{ className: "row content-row" },
																																																																																										_react2["default"].createElement("div", { className: "col-md-3" }),
																																																																																										_react2["default"].createElement(
																																																																																																												"div",
																																																																																																												{ className: "col-md-6" },
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h1",
																																																																																																																														{ className: "content-h1" },
																																																																																																																														"Privacy Policy"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h3",
																																																																																																																														null,
																																																																																																																														"Data Controller and Owner"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"Sailing Channels,",
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"span",
																																																																																																																																																{ className: "reverse" },
																																																																																																																																																"moc.slennahc-gnilias@yoha"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h3",
																																																																																																																														null,
																																																																																																																														"Types of Data collected"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Cookie and Usage data. Other Personal Data collected may be described in other sections of this privacy policy or by dedicated explanation text contextually with the Data collection. The Personal Data may be freely provided by the User, or collected automatically when using this Application. Any use of Cookies - or of other tracking tools - by this Application or by the owners of third party services used by this Application, unless stated otherwise, serves to identify Users and remember their preferences, for the sole purpose of providing the service required by the User. Failure to provide certain Personal Data may make it impossible for this Application to provide its services. Users are responsible for any Personal Data of third parties obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h3",
																																																																																																																														null,
																																																																																																																														"Mode and place of processing the Data"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Methods of processing"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Place"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The Data is processed at the Data Controller's operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Retention time"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h3",
																																																																																																																														null,
																																																																																																																														"The use of the collected Data"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The Data concerning the User is collected to allow the Owner to provide its services, as well as for the following purposes: Analytics and Displaying content from external platforms. The Personal Data used for each purpose is outlined in the specific sections of this document."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h3",
																																																																																																																														null,
																																																																																																																														"Detailed information on the processing of Personal Data"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"Personal Data is collected for the following purposes and using the following services:"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Analytics"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h5",
																																																																																																																														null,
																																																																																																																														"Google Analytics (Google Inc.)"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. Personal Data collected: Cookie and Usage data. Place of processing: USA – ",
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"a",
																																																																																																																																																{ href: "http://www.google.com/intl/en/policies/privacy/", target: "_blank" },
																																																																																																																																																"Privacy Policy"
																																																																																																																														),
																																																																																																																														" – ",
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"a",
																																																																																																																																																{ href: "http://tools.google.com/dlpage/gaoptout?hl=en", target: "_blank" },
																																																																																																																																																"Opt Out"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Displaying content from external platforms"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"These services allow you to view content hosted on external platforms directly from the pages of this Application and interact with them. If a service of this kind is installed, it may still collect web traffic data for the pages where the service is installed, even when users do not use it."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h5",
																																																																																																																														null,
																																																																																																																														"Youtube video widget (Google Inc.)"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"Youtube is a video content visualization service provided by Google Inc. that allows this Application to incorporate content of this kind on its pages. Personal Data collected: Cookie and Usage data. Place of processing: USA – ",
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"a",
																																																																																																																																																{ href: "http://www.google.it/intl/en/policies/privacy/", target: "_blank" },
																																																																																																																																																"Privacy Policy"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h3",
																																																																																																																														null,
																																																																																																																														"Additional information about Data collection and processing"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Legal action"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The User's Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services. The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Additional information about User's Personal Data"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"System Logs and Maintenance"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"For operation and maintenance purposes, this Application and any third party services may collect files that record interaction with this Application (System Logs) or use for this purpose other Personal Data (such as IP Address)."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Information not contained in this policy"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"The rights of Users"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above. This Application does not support “Do Not Track” requests. To determine whether any of the third party services it uses honor the “Do Not Track” requests, please read their privacy policies."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Changes to this privacy policy"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller removes the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users."
																																																																																																												),
																																																																																																												_react2["default"].createElement("hr", null),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h3",
																																																																																																																														null,
																																																																																																																														"Definitions and legal references"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Personal Data (or Data)"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"Any information regarding a natural person, a legal person, an institution or an association, which is, or can be, identified, even indirectly, by reference to any other information, including a personal identification number."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Usage Data"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"Information collected automatically from this Application (or third party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"User"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The individual using this Application, which must coincide with or be authorized by the Data Subject, to whom the Personal Data refers."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Data Subject"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The legal or natural person to whom the Personal Data refers."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Data Processor (or Data Supervisor)"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The natural person, legal person, public administration or any other body, association or organization authorized by the Data Controller to process the Personal Data in compliance with this privacy policy."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Data Controller (or Owner)"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The natural person, legal person, public administration or any other body, association or organization with the right, also jointly with another Data Controller, to make decisions regarding the purposes, and the methods of processing of Personal Data and the means used, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"This Application"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"The hardware or software tool by which the Personal Data of the User is collected."
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"center",
																																																																																																																														null,
																																																																																																																														_react2["default"].createElement(
																																																																																																																																																"p",
																																																																																																																																																null,
																																																																																																																																																"~"
																																																																																																																														)
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h4",
																																																																																																																														null,
																																																																																																																														"Cookie"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"Small piece of data stored in the User's device."
																																																																																																												),
																																																																																																												_react2["default"].createElement("hr", null),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"h3",
																																																																																																																														null,
																																																																																																																														"Legal information"
																																																																																																												),
																																																																																																												_react2["default"].createElement(
																																																																																																																														"p",
																																																																																																																														null,
																																																																																																																														"Notice to European Users: this privacy statement has been prepared in fulfillment of the obligations under Art. 10 of EC Directive n. 95/46/EC, and under the provisions of Directive 2002/58/EC, as revised by Directive 2009/136/EC, on the subject of Cookies. This privacy policy relates solely to this Application."
																																																																																																												)
																																																																																										),
																																																																																										_react2["default"].createElement("div", { className: "col-md-3" })
																																																																								)
																																																						);
																																				}
																		}]);

																		return PrivacyPolicy;
})(_react2["default"].Component);

exports["default"] = PrivacyPolicy;
module.exports = exports["default"];

},{"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"react":"react"}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var SearchBar = (function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar() {
        _classCallCheck(this, SearchBar);

        _get(Object.getPrototypeOf(SearchBar.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(SearchBar, [{
        key: "componentDidMount",

        // COMPONENT DID MOUNT
        value: function componentDidMount() {

            // intercept browser search ctrl+f
            $(window).on("keydown", function (e) {
                if ((e.ctrlKey || e.metaKey) && e.keyCode === 70) {

                    // don't open browser search
                    e.preventDefault();

                    // focus search bar
                    $("#search-bar").focus();

                    // scroll up
                    window.setTimeout(function () {
                        window.scrollTo(0, 0);
                    }, 1);
                }
            });
        }

        // COMPONENT WILL UNMOUNT
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            $(window).off("keydown");
        }

        // KEY UP
    }, {
        key: "keyUp",
        value: function keyUp(e) {

            // ESC clears selection
            if (e.keyCode === 27) {

                e.target.value = "";
                this.props.history.pushState(null, "/");
                return;
            }

            // ENTER triggers search
            else if (e.keyCode === 13) {
                    var v = e.target.value;
                    this.props.history.replaceState(null, "/search/" + encodeURIComponent(v));
                }
        }

        // CHANGE SORT
    }, {
        key: "changeSort",
        value: function changeSort(e) {
            $(window).trigger("changeSort", { "sortBy": e.target.value });
        }

        // HIGHLIGHT SORT
    }, {
        key: "highlightSort",
        value: function highlightSort(item) {
            //this.props.sortBy = item;
            $(window).trigger("changeSort", { "sortBy": item });
        }

        // RENDER
    }, {
        key: "render",
        value: function render() {

            // make sort group invisible when we are searching
            var sortGroupClass = "form-group sort-group";
            if (this.props.query) {
                sortGroupClass += " invisible";
            }

            return _react2["default"].createElement(
                "div",
                { className: "row search-row" },
                _react2["default"].createElement("div", { className: "col-lg-3 col-md-2 col-sm-2" }),
                _react2["default"].createElement(
                    "div",
                    { className: "col-lg-6 col-md-8 col-sm-8" },
                    _react2["default"].createElement(
                        "div",
                        { className: "row" },
                        _react2["default"].createElement("div", { className: "col-lg-1 col-md-1 col-sm-0" }),
                        _react2["default"].createElement(
                            "div",
                            { className: "col-lg-10 col-md-10 col-sm-12" },
                            _react2["default"].createElement(
                                "div",
                                { className: "form-group label-floating is-empty" },
                                _react2["default"].createElement(
                                    "label",
                                    { className: "control-label" },
                                    "Search for ..."
                                ),
                                _react2["default"].createElement("input", { className: "form-control", type: "text", id: "search-bar", onKeyUp: this.keyUp.bind(this) }),
                                _react2["default"].createElement("span", { className: "material-input" })
                            )
                        ),
                        _react2["default"].createElement("div", { className: "col-lg-1 col-md-1 col-sm-0" })
                    ),
                    _react2["default"].createElement(
                        "div",
                        { className: sortGroupClass },
                        _react2["default"].createElement(
                            "label",
                            { className: "sort-label control-label" },
                            "Sort by:"
                        ),
                        _react2["default"].createElement(
                            "label",
                            { className: "sortBy-label" },
                            _react2["default"].createElement("input", { id: "sortBy-subscribers", type: "radio", onClick: this.changeSort.bind(this), className: "sort-option", name: "sortby", value: "subscribers", defaultChecked: this.props.sortBy === "subscribers" }),
                            " Subscribers"
                        ),
                        _react2["default"].createElement(
                            "label",
                            { className: "sortBy-label" },
                            _react2["default"].createElement("input", { type: "radio", onClick: this.changeSort.bind(this), className: "sort-option", name: "sortby", value: "views", defaultChecked: this.props.sortBy === "views" }),
                            " Views"
                        ),
                        _react2["default"].createElement(
                            "label",
                            { className: "sortBy-label" },
                            _react2["default"].createElement("input", { type: "radio", onClick: this.changeSort.bind(this), className: "sort-option", name: "sortby", value: "upload", defaultChecked: this.props.sortBy === "upload" }),
                            " Last upload"
                        ),
                        _react2["default"].createElement(
                            "label",
                            { className: "sortBy-label" },
                            _react2["default"].createElement("input", { type: "radio", onClick: this.changeSort.bind(this), className: "sort-option", name: "sortby", value: "founded", defaultChecked: this.props.sortBy === "newest" }),
                            " Founded"
                        ),
                        _react2["default"].createElement(
                            "label",
                            { className: "sortBy-label" },
                            _react2["default"].createElement("input", { type: "radio", onClick: this.changeSort.bind(this), className: "sort-option", name: "sortby", value: "trending", defaultChecked: this.props.sortBy === "trending" }),
                            " Trending"
                        )
                    )
                ),
                _react2["default"].createElement("div", { className: "col-lg-3 col-md-2 col-sm-2" })
            );
        }
    }]);

    return SearchBar;
})(_react2["default"].Component);

exports["default"] = SearchBar;
module.exports = exports["default"];

},{"react":"react"}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SearchResultList = require("./SearchResultList");

var _SearchResultList2 = _interopRequireDefault(_SearchResultList);

var _SearchBar = require("./SearchBar");

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _BannerDialog = require("./BannerDialog");

var _BannerDialog2 = _interopRequireDefault(_BannerDialog);

var _SignInDialog = require("./SignInDialog");

var _SignInDialog2 = _interopRequireDefault(_SignInDialog);

var _reactCookie = require("react-cookie");

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _reactRouter = require("react-router");

var SearchResult = (function (_React$Component) {
	_inherits(SearchResult, _React$Component);

	// CONSTRUCTOR

	function SearchResult(props) {
		_classCallCheck(this, SearchResult);

		_get(Object.getPrototypeOf(SearchResult.prototype), "constructor", this).call(this, props);
		this.state = {
			"showScrollUp": false,
			"me": _reactCookie2["default"].load("me") ? JSON.parse(_reactCookie2["default"].load("me").replace("j:", "")) : null
		};
	}

	// COMPONENT DID MOUNT

	_createClass(SearchResult, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			$(window).on("scroll", this.onWindowScroll.bind(this));
			$("#search-bar").focus();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			$(window).off("scroll");
		}

		// SCROLL UP
	}, {
		key: "scrollUp",
		value: function scrollUp() {
			window.scrollTo(0, 0);
		}

		// ON WINDOW SCROLL
	}, {
		key: "onWindowScroll",
		value: function onWindowScroll() {

			// did the scrollup state change?
			if (this.state.showScrollUp !== $(window).scrollTop() > 100) {

				// do or do not show scrollup button
				this.setState({
					"showScrollUp": $(window).scrollTop() > 100
				});
			}
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			var scrollUp = null;

			if (this.state.showScrollUp === true) {
				scrollUp = _react2["default"].createElement(
					"div",
					{ className: "scroll-up-btn", title: "Scroll to top", onClick: this.scrollUp.bind(this) },
					_react2["default"].createElement("i", { className: "fa fa-arrow-circle-up fa-3x" })
				);
			}

			var query = this.props.params.query;

			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(_Logo2["default"], null),
				!this.state.me ? _react2["default"].createElement(
					"center",
					null,
					_react2["default"].createElement(
						_reactRouter.Link,
						{ to: "/signin", className: "btn btn-raised btn-sm btn-danger yt-login" },
						"Sign In with ",
						_react2["default"].createElement("i", { className: "fa fa-youtube" }),
						" YouTube"
					)
				) : null,
				_react2["default"].createElement(_OffsetMenu2["default"], null),
				scrollUp,
				_react2["default"].createElement(_SearchBar2["default"], { history: this.props.history, query: query }),
				_react2["default"].createElement(_SearchResultList2["default"], { history: this.props.history, query: query }),
				this.props.children,
				_react2["default"].createElement(_BannerDialog2["default"], null),
				_react2["default"].createElement(_SignInDialog2["default"], null)
			);
		}
	}]);

	return SearchResult;
})(_react2["default"].Component);

exports["default"] = SearchResult;
module.exports = exports["default"];

},{"./BannerDialog":16,"./Logo":30,"./OffsetMenu":32,"./SearchBar":36,"./SearchResultList":38,"./SignInDialog":39,"react":"react","react-cookie":"react-cookie","react-router":"react-router"}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ChannelListItem = require("./ChannelListItem");

var _ChannelListItem2 = _interopRequireDefault(_ChannelListItem);

var _VideoListItem = require("./VideoListItem");

var _VideoListItem2 = _interopRequireDefault(_VideoListItem);

var _actionsChannelActions = require("../actions/ChannelActions");

var _actionsChannelActions2 = _interopRequireDefault(_actionsChannelActions);

var _storesChannelStore = require("../stores/ChannelStore");

var _storesChannelStore2 = _interopRequireDefault(_storesChannelStore);

var SearchResultList = (function (_React$Component) {
	_inherits(SearchResultList, _React$Component);

	// CONSTRUCTOR

	function SearchResultList(props) {
		_classCallCheck(this, SearchResultList);

		_get(Object.getPrototypeOf(SearchResultList.prototype), "constructor", this).call(this, props);
		this.state = _storesChannelStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(SearchResultList, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesChannelStore2["default"].listen(this.onChange);

			if (this.props.query) {
				$("#search-bar").val(this.props.query);
				window.setTimeout(function () {
					$("#search-bar").focus();
				}, 1);
			}

			// trigger initial search
			_actionsChannelActions2["default"].searchChannels(this.props.query);
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesChannelStore2["default"].unlisten(this.onChange);
		}

		// COMPOENTNT WILL RECEIVE PROPS
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {

			if (this.props.query !== nextProps.query) {
				_actionsChannelActions2["default"].searchChannels(nextProps.query);
			}
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			// no channels found
			if (this.state.results.length === 0) {
				return _react2["default"].createElement(
					"div",
					{ className: "row" },
					_react2["default"].createElement("div", { className: "col-md-1" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-10" },
						_react2["default"].createElement(
							"center",
							null,
							"No channels or videos match the search query!"
						)
					),
					_react2["default"].createElement("div", { className: "col-md-1" })
				);
			}

			var results = [];

			// loop results
			for (var i in this.state.results) {
				var item = this.state.results[i];

				// what type of result is this?
				if (item.type === "channel") {
					results.push(_react2["default"].createElement(_ChannelListItem2["default"], { key: "cli-" + item.id, channel: item }));
				} else {
					results.push(_react2["default"].createElement(_VideoListItem2["default"], { key: "vli-" + item._id, video: item }));
				}
			}

			return _react2["default"].createElement(
				"div",
				{ className: "row" },
				_react2["default"].createElement("div", { className: "col-md-1" }),
				_react2["default"].createElement(
					"div",
					{ className: "col-md-10" },
					this.state.loading === true ? _react2["default"].createElement(
						"center",
						{ className: "loadMore" },
						"Loading more channels ..."
					) : results
				),
				_react2["default"].createElement("div", { className: "col-md-1" })
			);
		}
	}]);

	return SearchResultList;
})(_react2["default"].Component);

exports["default"] = SearchResultList;
module.exports = exports["default"];

},{"../actions/ChannelActions":2,"../stores/ChannelStore":55,"./ChannelListItem":19,"./VideoListItem":49,"react":"react"}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var SignInDialog = (function (_React$Component) {
	_inherits(SignInDialog, _React$Component);

	function SignInDialog() {
		_classCallCheck(this, SignInDialog);

		_get(Object.getPrototypeOf(SignInDialog.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(SignInDialog, [{
		key: "render",

		// RENDER
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ id: "signin-dialog", className: "modal fade" },
				_react2["default"].createElement(
					"div",
					{ className: "modal-dialog" },
					_react2["default"].createElement(
						"div",
						{ className: "modal-content" },
						_react2["default"].createElement(
							"div",
							{ className: "modal-header" },
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" },
								"×"
							),
							_react2["default"].createElement(
								"h3",
								{ className: "modal-title" },
								"Oh no!"
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "modal-body" },
							_react2["default"].createElement(
								"p",
								null,
								"You need to sign in with your YouTube account in order to perform this action."
							),
							_react2["default"].createElement(
								"p",
								null,
								"Consider visiting the sign in page for more information:"
							),
							_react2["default"].createElement(
								"center",
								{ className: "banner-channel" },
								_react2["default"].createElement(
									"a",
									{ href: "/signin", className: "btn btn-raised btn-sm btn-danger yt-login" },
									"Sign In with ",
									_react2["default"].createElement("i", { className: "fa fa-youtube" }),
									" YouTube"
								)
							)
						)
					)
				)
			);
		}
	}]);

	return SignInDialog;
})(_react2["default"].Component);

exports["default"] = SignInDialog;
module.exports = exports["default"];

},{"react":"react","react-router":"react-router"}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionsChannelActions = require("../actions/ChannelActions");

var _actionsChannelActions2 = _interopRequireDefault(_actionsChannelActions);

var _reactCookie = require("react-cookie");

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var SubscribeButton = (function (_React$Component) {
	_inherits(SubscribeButton, _React$Component);

	// CONSTRUCTOR

	function SubscribeButton(props) {
		_classCallCheck(this, SubscribeButton);

		_get(Object.getPrototypeOf(SubscribeButton.prototype), "constructor", this).call(this, props);

		this.state = {
			"subscribed": props.channel.subscribed,
			"loading": false
		};
	}

	// SUBSCRIBE

	_createClass(SubscribeButton, [{
		key: "subscribeChannel",
		value: function subscribeChannel(e) {
			var _this = this;

			this.setState({
				"subscribed": this.state.subscribed,
				"loading": true
			});

			// perform the subscribe action
			_actionsChannelActions2["default"].subscribe(this.props.channel.id, function (err, data) {

				if (!err && data.success === true) {
					_this.setState({
						"subscribed": true,
						"loading": false
					});
				} else {
					_this.setState({
						"subscribed": _this.state.subscribed,
						"loading": false
					});
				}
			});
		}

		// UNSUBSCRIBE
	}, {
		key: "unsubscribeChannel",
		value: function unsubscribeChannel(e) {
			var _this2 = this;

			this.setState({
				"subscribed": this.state.subscribed,
				"loading": true
			});

			// perform the unsubscribe action
			_actionsChannelActions2["default"].unsubscribe(this.props.channel.id, function (err, data) {

				if (!err && data.success === true) {
					_this2.setState({
						"subscribed": false,
						"loading": false
					});
				} else {
					_this2.setState({
						"subscribed": _this2.state.subscribed,
						"loading": false
					});
				}
			});
		}

		// SHOW SIGN IN BANNER
	}, {
		key: "showSignInBanner",
		value: function showSignInBanner() {

			if (!($("#signin-dialog").data("bs.modal") || {}).isShown) {

				// open the dialog
				$("#signin-dialog").modal("show");
			}
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			// user is not logged in
			if (!_reactCookie2["default"].load("me")) {
				return _react2["default"].createElement(
					"button",
					{ onClick: this.showSignInBanner.bind(this), className: "hidden-xs btn btn-danger btn-sidebar btn-raised" },
					_react2["default"].createElement("i", { className: "fa fa-youtube-play" }),
					" Subscribe"
				);
			}

			// a subscription state is known
			if (this.state.subscribed === false) {

				// render subscribe button
				if (this.state.loading === true) {
					return _react2["default"].createElement(
						"button",
						{ className: "hidden-xs btn btn-danger btn-sidebar btn-raised", disabled: "disabled" },
						_react2["default"].createElement("i", { className: "fa fa-spinner fa-pulse" })
					);
				} else {
					return _react2["default"].createElement(
						"button",
						{ onClick: this.subscribeChannel.bind(this), className: "hidden-xs btn btn-danger btn-sidebar btn-raised" },
						_react2["default"].createElement(
							"span",
							null,
							_react2["default"].createElement("i", { className: "fa fa-youtube-play" }),
							" Subscribe"
						)
					);
				}
			} else {

				// render unsuscribe button
				if (this.state.loading === true) {
					return _react2["default"].createElement(
						"button",
						{ className: "hidden-xs btn btn-sidebar btn-raised", disabled: "disabled" },
						_react2["default"].createElement("i", { className: "fa fa-spinner fa-pulse" })
					);
				} else {
					return _react2["default"].createElement(
						"button",
						{ onClick: this.unsubscribeChannel.bind(this), className: "hidden-xs btn btn-sidebar btn-raised" },
						_react2["default"].createElement(
							"span",
							null,
							_react2["default"].createElement("i", { className: "fa fa-youtube-play" }),
							" Unsubscribe"
						)
					);
				}
			}
		}
	}]);

	return SubscribeButton;
})(_react2["default"].Component);

exports["default"] = SubscribeButton;
module.exports = exports["default"];

},{"../actions/ChannelActions":2,"react":"react","react-cookie":"react-cookie"}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var SubscriberHistoryChart = (function (_React$Component) {
	_inherits(SubscriberHistoryChart, _React$Component);

	function SubscriberHistoryChart() {
		_classCallCheck(this, SubscriberHistoryChart);

		_get(Object.getPrototypeOf(SubscriberHistoryChart.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(SubscriberHistoryChart, [{
		key: "componentDidMount",

		// COMPONENT DID MOUNT
		value: function componentDidMount() {
			this.loadChart(this.props);
		}

		// COMPONENT WILL RECEIVE PROPS
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			this.loadChart(nextProps);
		}

		// SHOULD COMPONENT UPDATE
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			return this.props.channel.id !== nextProps.channel.id;
		}

		// LOAD CHART
	}, {
		key: "loadChart",
		value: function loadChart(props) {

			window.setTimeout(function () {
				var $el = $("#subsriberChart_" + props.channel.id);

				// get canvas and set width
				var canvas = $el.get(0);
				canvas.width = $el.parent().width();

				// get context object
				var ctx = canvas.getContext("2d");

				// filter out values and dates for labels
				var values = props.channel.subHist.map(function (item) {
					return item.subscribers;
				});

				var labels = props.channel.subHist.map(function (item) {
					var raw = item._id.date + "";
					var d = new Date(parseInt(raw.substr(0, 4)), parseInt(raw.substr(4, 2)) - 1, parseInt(raw.substr(6, 2)));
					return d.toLocaleDateString();
				});

				// prepare data
				var data = {
					labels: labels,
					datasets: [{
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: values
					}]
				};

				Chart.defaults.global.showScale = false;

				// draw line chart
				var ch = new Chart(ctx).Line(data, {
					"pointHitDetectionRadius": 5
				});
			}, 500);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement("canvas", { id: "subsriberChart_" + this.props.channel.id, height: "100" });
		}
	}]);

	return SubscriberHistoryChart;
})(_react2["default"].Component);

exports["default"] = SubscriberHistoryChart;
module.exports = exports["default"];

},{"react":"react"}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _ChannelMissingTester = require("./ChannelMissingTester");

var _ChannelMissingTester2 = _interopRequireDefault(_ChannelMissingTester);

var _actionsMeActions = require("../actions/MeActions");

var _actionsMeActions2 = _interopRequireDefault(_actionsMeActions);

var _storesMeStore = require("../stores/MeStore");

var _storesMeStore2 = _interopRequireDefault(_storesMeStore);

var _SuggestChannels = require("./SuggestChannels");

var _SuggestChannels2 = _interopRequireDefault(_SuggestChannels);

var Suggest = (function (_Component) {
	_inherits(Suggest, _Component);

	function Suggest(props) {
		_classCallCheck(this, Suggest);

		_get(Object.getPrototypeOf(Suggest.prototype), "constructor", this).call(this, props);

		this.state = _storesMeStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(Suggest, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			document.title = "Suggest a channel | Sailing Channels";
			_storesMeStore2["default"].listen(this.onChange);
			if (this.state.subscriptions.length === 0) _actionsMeActions2["default"].getSubscriptions();
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesMeStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// REPLACE X
	}, {
		key: "replaceX",
		value: function replaceX(e) {
			e.target.href = e.target.href.replace(/x/g, "");
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(_OffsetSocial2["default"], null),
				_react2["default"].createElement(_Logo2["default"], null),
				_react2["default"].createElement(_OffsetMenu2["default"], null),
				_react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"h1",
							{ className: "content-h1" },
							"Suggest a channel"
						),
						this.state.me !== null ? _react2["default"].createElement(
							"div",
							null,
							_react2["default"].createElement(
								"p",
								null,
								"Know of any sailing channels that are not listed here? Well, that's brilliant! You can use the form below to check and suggest a channel for the list:"
							),
							_react2["default"].createElement(_ChannelMissingTester2["default"], null),
							_react2["default"].createElement(_SuggestChannels2["default"], {
								subscriptions: this.state.subscriptions
							})
						) : _react2["default"].createElement(
							"p",
							null,
							"Send an email to",
							" ",
							_react2["default"].createElement(
								"a",
								{
									href: "mailto:ahoyx@sailingx-channels.com",
									onMouseOver: this.replaceX.bind(this),
									className: "reverse"
								},
								"moc.slennahc-gnilias@yoha"
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				)
			);
		}
	}]);

	return Suggest;
})(_react.Component);

exports["default"] = Suggest;
module.exports = exports["default"];

},{"../actions/MeActions":4,"../stores/MeStore":57,"./ChannelMissingTester":20,"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"./SuggestChannels":44,"react":"react"}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _helpersHttp = require("../helpers/http");

var _helpersHttp2 = _interopRequireDefault(_helpersHttp);

var SuggestButton = (function (_Component) {
	_inherits(SuggestButton, _Component);

	function SuggestButton(props) {
		_classCallCheck(this, SuggestButton);

		_get(Object.getPrototypeOf(SuggestButton.prototype), "constructor", this).call(this, props);
		this.state = {
			status: null
		};
	}

	// ON CLICK

	_createClass(SuggestButton, [{
		key: "onClick",
		value: function onClick() {
			this.setState({
				status: "suggested"
			});

			new _helpersHttp2["default"]().post({
				url: "/api/channel/suggest",
				data: JSON.stringify({
					channel: this.props.channel
				}),
				headers: {
					"Content-Type": "application/json"
				},
				type: "POST",
				dataType: "json",
				cache: false
			}, function (err, data) {});
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			if (this.state.status === null) {
				return _react2["default"].createElement(
					"button",
					{
						className: "btn btn-default btn-raised",
						style: { padding: "8px 20px" },
						onClick: this.onClick.bind(this)
					},
					"Suggest"
				);
			} else if (this.state.status == "suggested") {
				return _react2["default"].createElement(
					"a",
					{ className: "btn btn-default" },
					_react2["default"].createElement("i", { className: "fa fa-check" }),
					" Done"
				);
			}
		}
	}]);

	return SuggestButton;
})(_react.Component);

exports["default"] = SuggestButton;
module.exports = exports["default"];

},{"../helpers/http":51,"react":"react"}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _helpersHttp = require("../helpers/http");

var _helpersHttp2 = _interopRequireDefault(_helpersHttp);

var _SuggestChannelsList = require("./SuggestChannelsList");

var _SuggestChannelsList2 = _interopRequireDefault(_SuggestChannelsList);

var SuggestChannels = (function (_Component) {
	_inherits(SuggestChannels, _Component);

	// CONSTRUCTOR

	function SuggestChannels(props) {
		_classCallCheck(this, SuggestChannels);

		_get(Object.getPrototypeOf(SuggestChannels.prototype), "constructor", this).call(this, props);
		this.state = {
			sail: [],
			nonsail: []
		};
	}

	// COMPONENT WILL RECEIVE PROPS

	_createClass(SuggestChannels, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			var _this = this;

			if (!nextProps.subscriptions) return;

			new _helpersHttp2["default"]().post({
				url: "/api/channels/identify",
				data: JSON.stringify({
					hints: nextProps.subscriptions
				}),
				headers: {
					"Content-Type": "application/json"
				},
				type: "POST",
				dataType: "json",
				cache: false
			}, function (err, data) {
				_this.setState({
					sail: data.filter(function (c) {
						return c.src == "yt" && c.sail === true;
					}),
					nonsail: data.filter(function (c) {
						return c.src == "yt" && c.sail === false;
					})
				});
			});
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			if (this.state.sail.length === 0 && this.state.nonsail.length === 0) return null;

			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement("hr", null),
				_react2["default"].createElement(
					"center",
					null,
					_react2["default"].createElement(
						"h3",
						null,
						_react2["default"].createElement("i", { className: "fa fa-youtube" }),
						" Channels you subscribed to"
					),
					_react2["default"].createElement(
						"p",
						null,
						"Some of your subscriptions are likely to be sailing channels and are ",
						_react2["default"].createElement(
							"u",
							null,
							"not"
						),
						" yet listed on sailing-channels.com. You can easliy suggest them to be listed:"
					),
					_react2["default"].createElement(
						"p",
						null,
						" "
					)
				),
				_react2["default"].createElement(_SuggestChannelsList2["default"], { channels: this.state.sail }),
				_react2["default"].createElement("hr", null),
				_react2["default"].createElement(
					"div",
					{ className: "alert alert-info", role: "alert" },
					"Some of your subscriptions are probably not sailing-channels, but you can check and suggest them anyway:"
				),
				_react2["default"].createElement(
					"p",
					null,
					" "
				),
				_react2["default"].createElement(_SuggestChannelsList2["default"], { channels: this.state.nonsail })
			);
		}
	}]);

	return SuggestChannels;
})(_react.Component);

exports["default"] = SuggestChannels;
module.exports = exports["default"];

},{"../helpers/http":51,"./SuggestChannelsList":45,"react":"react"}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Description = require("./Description");

var _Description2 = _interopRequireDefault(_Description);

var _reactLazyload = require("react-lazyload");

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

var _SuggestButton = require("./SuggestButton");

var _SuggestButton2 = _interopRequireDefault(_SuggestButton);

var SuggestChannelsList = (function (_Component) {
	_inherits(SuggestChannelsList, _Component);

	function SuggestChannelsList() {
		_classCallCheck(this, SuggestChannelsList);

		_get(Object.getPrototypeOf(SuggestChannelsList.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(SuggestChannelsList, [{
		key: "render",

		// RENDER
		value: function render() {
			return _react2["default"].createElement(
				"div",
				null,
				this.props.channels.map(function (c) {
					return _react2["default"].createElement(
						"div",
						{
							key: "channel-suggest-" + c._id,
							className: "row",
							style: { minHeight: "120px" }
						},
						_react2["default"].createElement(
							"div",
							{ className: "col-md-2 col-sm-2 col-xs-3" },
							_react2["default"].createElement(
								"center",
								null,
								_react2["default"].createElement(
									_reactLazyload2["default"],
									{ once: true },
									_react2["default"].createElement("img", {
										src: c.data.thumbnail,
										className: "channel-thumb"
									})
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "col-md-7 col-sm-6 col-xs-9" },
							_react2["default"].createElement(
								"h3",
								null,
								_react2["default"].createElement(
									"a",
									{
										href: "https://youtube.com/channel/" + c._id,
										target: "_blank"
									},
									c.data.title
								)
							),
							_react2["default"].createElement(
								"div",
								{ className: "hidden-xs" },
								c.data.description ? _react2["default"].createElement(_Description2["default"], {
									text: c.data.description,
									more: true,
									maxLength: 100
								}) : null
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "col-md-3 col-sm-4 col-xs-10 col-xs-offset-3 col-md-offset-0 col-sm-offset-0" },
							_react2["default"].createElement(_SuggestButton2["default"], { channel: c._id })
						)
					);
				})
			);
		}
	}]);

	return SuggestChannelsList;
})(_react.Component);

exports["default"] = SuggestChannelsList;
module.exports = exports["default"];

},{"./Description":23,"./SuggestButton":43,"react":"react","react-lazyload":164}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var Contributions = (function (_React$Component) {
	_inherits(Contributions, _React$Component);

	function Contributions() {
		_classCallCheck(this, Contributions);

		_get(Object.getPrototypeOf(Contributions.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Contributions, [{
		key: "componentDidMount",

		// COMPONENT DID MOUNT
		value: function componentDidMount() {
			document.title = "Support Us | Sailing Channels";
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(_OffsetSocial2["default"], null),
				_react2["default"].createElement(_Logo2["default"], null),
				_react2["default"].createElement(_OffsetMenu2["default"], null),
				_react2["default"].createElement(
					"div",
					{ className: "row content-row" },
					_react2["default"].createElement("div", { className: "col-md-3" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6" },
						_react2["default"].createElement(
							"h1",
							{ className: "content-h1" },
							"Support Us"
						),
						_react2["default"].createElement(
							"p",
							null,
							_react2["default"].createElement("img", { id: "banner-img", src: "/img/twoaboardtuuli.jpg", width: "100%" })
						),
						_react2["default"].createElement(
							"p",
							null,
							"The ",
							_react2["default"].createElement(
								"a",
								{ href: "/channel/UCZbZeC2OfdVMwm9AR_zu0_g", target: "_blank" },
								_react2["default"].createElement(
									"b",
									null,
									"Two aboard Tuuli crew"
								)
							),
							" created this website in their sparetime for you."
						),
						_react2["default"].createElement(
							"p",
							null,
							"If you like it, and want to give something back, feel free to support us with a tip via the following platforms. It means a lot to us!"
						),
						_react2["default"].createElement(
							"p",
							null,
							"- Kristy & Thomas"
						),
						_react2["default"].createElement(
							"div",
							{ id: "support-links", className: "row support-row" },
							_react2["default"].createElement(
								"div",
								{ className: "col-md-6 text-center" },
								_react2["default"].createElement(
									"a",
									{ href: "https://www.patreon.com/sailingchannels", target: "_blank" },
									_react2["default"].createElement("img", { src: "https://rawgit.com/sailingchannels/website/master/public/img/patreon.jpg", height: "150", width: "150" })
								)
							),
							_react2["default"].createElement(
								"div",
								{ className: "col-md-6 text-center" },
								_react2["default"].createElement(
									"a",
									{ href: "https://www.paypal.me/sailingchannels", target: "_blank" },
									_react2["default"].createElement("img", { src: "https://rawgit.com/sailingchannels/website/master/public/img/paypal.png", height: "150", width: "150" })
								)
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-3" })
				)
			);
		}
	}]);

	return Contributions;
})(_react2["default"].Component);

exports["default"] = Contributions;
module.exports = exports["default"];

},{"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"react":"react"}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _OffsetMenu = require("./OffsetMenu");

var _OffsetMenu2 = _interopRequireDefault(_OffsetMenu);

var _VideoList = require("./VideoList");

var _VideoList2 = _interopRequireDefault(_VideoList);

var _actionsVideoActions = require("../actions/VideoActions");

var _actionsVideoActions2 = _interopRequireDefault(_actionsVideoActions);

var _storesVideoStore = require("../stores/VideoStore");

var _storesVideoStore2 = _interopRequireDefault(_storesVideoStore);

var _OffsetSocial = require("./OffsetSocial");

var _OffsetSocial2 = _interopRequireDefault(_OffsetSocial);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _reactRouter = require("react-router");

var _SubscribeButton = require("./SubscribeButton");

var _SubscribeButton2 = _interopRequireDefault(_SubscribeButton);

var VideoDetail = (function (_React$Component) {
	_inherits(VideoDetail, _React$Component);

	// CONSTRUCTOR

	function VideoDetail(props) {
		_classCallCheck(this, VideoDetail);

		_get(Object.getPrototypeOf(VideoDetail.prototype), "constructor", this).call(this, props);
		this.state = _storesVideoStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(VideoDetail, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesVideoStore2["default"].listen(this.onChange);
			_actionsVideoActions2["default"].getVideo(this.props.params.id);
		}

		// COMPONENT WILL RECEIVE PROPS
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {

			if (nextProps.params.id !== this.props.params.id) {
				_actionsVideoActions2["default"].getVideo(nextProps.params.id);
			}
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesVideoStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
		}

		// FORMAT DATE
	}, {
		key: "formatDate",
		value: function formatDate(unix) {
			var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var d = new Date(unix * 1000);
			return m[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			// no video yet
			if (!this.state.video) {
				return null;
			}

			console.log(this.state.video.channel._id);

			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(_reactHelmet2["default"], { title: this.state.video.title }),
				_react2["default"].createElement(_OffsetSocial2["default"], null),
				_react2["default"].createElement(_Logo2["default"], null),
				_react2["default"].createElement(_OffsetMenu2["default"], null),
				_react2["default"].createElement(
					"div",
					{ className: "row" },
					_react2["default"].createElement("div", { className: "col-md-1" }),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-10" },
						_react2["default"].createElement(
							"div",
							{ className: "row" },
							_react2["default"].createElement(
								"div",
								{ className: "col-md-12" },
								_react2["default"].createElement(
									"center",
									null,
									_react2["default"].createElement(
										"h1",
										{ className: "video-detail-title" },
										this.state.video.title
									)
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "row" },
							_react2["default"].createElement(
								"div",
								{ className: "col-md-2 col-sm-2" },
								_react2["default"].createElement("img", { src: this.state.video.channel.thumbnail, className: "channel-thumb" })
							),
							_react2["default"].createElement(
								"div",
								{ className: "col-md-7 col-sm-7" },
								_react2["default"].createElement("iframe", { width: "100%", height: "315", src: "https://www.youtube.com/embed/" + this.state.video._id + "?origin=https://sailing-channels.com", frameBorder: "0", allowFullScreen: true }),
								_react2["default"].createElement("p", { className: "channel-description", dangerouslySetInnerHTML: { __html: anchorme.js(this.state.video.description.replace("\n", "<br />"), { target: "_blank" }) } }),
								_react2["default"].createElement(
									"p",
									null,
									" "
								),
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Other videos:"
									)
								),
								_react2["default"].createElement(_VideoList2["default"], { channel: this.state.video.channel })
							),
							_react2["default"].createElement(
								"div",
								{ className: "col-md-3 col-sm-3" },
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Views:"
									),
									" ",
									(this.state.video.views || 0).toLocaleString()
								),
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Likes:"
									),
									" ",
									_react2["default"].createElement("i", { className: "fa fa-thumbs-up fa-fw" }),
									" ",
									(this.state.video.likes || 0).toLocaleString(),
									" ",
									_react2["default"].createElement("i", { className: "fa fa-thumbs-down fa-fw" }),
									" ",
									(this.state.video.dislikes || 0).toLocaleString()
								),
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Uploaded:"
									),
									" ",
									this.formatDate(this.state.video.publishedAt)
								),
								_react2["default"].createElement(
									"p",
									null,
									" "
								),
								_react2["default"].createElement(
									"p",
									null,
									_react2["default"].createElement(
										"b",
										null,
										"Channel:"
									),
									" ",
									_react2["default"].createElement(
										_reactRouter.Link,
										{ to: "/channel/" + this.state.video.channel._id },
										this.state.video.channel.title
									)
								),
								_react2["default"].createElement(_SubscribeButton2["default"], { channel: this.state.video.channel })
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-1" })
				),
				_react2["default"].createElement(
					"p",
					null,
					" "
				)
			);
		}
	}]);

	return VideoDetail;
})(_react2["default"].Component);

exports["default"] = VideoDetail;
module.exports = exports["default"];

},{"../actions/VideoActions":5,"../stores/VideoStore":58,"./Logo":30,"./OffsetMenu":32,"./OffsetSocial":33,"./SubscribeButton":40,"./VideoList":48,"react":"react","react-helmet":88,"react-router":"react-router"}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _VideoListItem = require("./VideoListItem");

var _VideoListItem2 = _interopRequireDefault(_VideoListItem);

var _actionsVideoActions = require("../actions/VideoActions");

var _actionsVideoActions2 = _interopRequireDefault(_actionsVideoActions);

var _storesVideoStore = require("../stores/VideoStore");

var _storesVideoStore2 = _interopRequireDefault(_storesVideoStore);

var _Description = require("./Description");

var _Description2 = _interopRequireDefault(_Description);

var _reactRouter = require("react-router");

var VideoList = (function (_React$Component) {
	_inherits(VideoList, _React$Component);

	// CONSTRUCTOR

	function VideoList(props) {
		_classCallCheck(this, VideoList);

		_get(Object.getPrototypeOf(VideoList.prototype), "constructor", this).call(this, props);
		this.state = _storesVideoStore2["default"].getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT

	_createClass(VideoList, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_storesVideoStore2["default"].listen(this.onChange);
			_actionsVideoActions2["default"].getVideos(this.props.channel._id, this.state.skip, this.state.take);
		}

		// COMPONENT WILL RECEIVE PROPS
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			// if the channel changed, reload
			if (nextProps.channel._id !== this.props.channel._id) {
				var newState = {
					videos: [],
					skip: 0,
					take: this.state.take
				};

				this.setState(newState);

				_actionsVideoActions2["default"].getVideos(nextProps.channel._id, newState.skip, newState.take);
			}
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_storesVideoStore2["default"].unlisten(this.onChange);
		}

		// ON CHANGE
	}, {
		key: "onChange",
		value: function onChange(state) {
			this.setState(state);
			$(".channel-thumb").unveil();
		}

		// FORMAT DATE
	}, {
		key: "formatDate",
		value: function formatDate(unix) {
			var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var d = new Date(unix * 1000);
			return m[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
		}

		// NEXT
	}, {
		key: "next",
		value: function next() {
			var newState = {
				videos: [],
				skip: this.state.skip + this.state.take,
				take: this.state.take
			};

			this.setState(newState);

			// load next videos
			_actionsVideoActions2["default"].getVideos(this.props.channel._id, newState.skip, newState.take);
		}

		// PREV
	}, {
		key: "prev",
		value: function prev() {
			var newState = {
				videos: [],
				skip: this.state.skip - this.state.take,
				take: this.state.take
			};

			this.setState(newState);

			// load next videos
			_actionsVideoActions2["default"].getVideos(this.props.channel._id, newState.skip, newState.take);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			return _react2["default"].createElement(
				"div",
				null,
				this.state.videos.map(function (v) {
					return _react2["default"].createElement(
						"div",
						{ className: "row channel-row", key: v._id },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-3 col-xs-3" },
							_react2["default"].createElement(
								"center",
								null,
								_react2["default"].createElement("img", {
									src: "https://cdn.rawgit.com/thomasbrueggemann/sailing-channels/master/public/img/spacer.png",
									"data-src": "https://img.youtube.com/vi/" + v._id + "/default.jpg",
									className: "channel-thumb"
								})
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "col-md-9 col-xs-9" },
							_react2["default"].createElement(
								"h3",
								null,
								_react2["default"].createElement(
									_reactRouter.Link,
									{ to: "/video/" + v._id },
									v.title
								)
							),
							_react2["default"].createElement(
								"p",
								null,
								_this.formatDate(v.publishedAt),
								" ·",
								" ",
								_react2["default"].createElement("i", { className: "fa fa-eye" }),
								" ",
								v.views,
								" ·",
								" ",
								_react2["default"].createElement("i", { className: "fa fa-thumbs-up" }),
								" ",
								v.likes,
								" ",
								"· ",
								_react2["default"].createElement("i", { className: "fa fa-thumbs-down" }),
								" ",
								v.dislikes
							),
							_react2["default"].createElement(_Description2["default"], { text: v.description, video: true })
						)
					);
				}),
				_react2["default"].createElement(
					"div",
					{ className: "row" },
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6 col-xs-6 text-left" },
						this.state.skip > 0 ? _react2["default"].createElement(
							"a",
							{
								className: "btn btn-raised",
								onClick: this.prev.bind(this)
							},
							_react2["default"].createElement("i", { className: "fa fa-arrow-left" }),
							" Previous"
						) : null
					),
					_react2["default"].createElement(
						"div",
						{ className: "col-md-6 col-xs-6 text-right" },
						this.state.fin === false ? _react2["default"].createElement(
							"a",
							{
								className: "btn btn-raised",
								onClick: this.next.bind(this)
							},
							"Next ",
							_react2["default"].createElement("i", { className: "fa fa-arrow-right" })
						) : null
					)
				)
			);
		}
	}]);

	return VideoList;
})(_react2["default"].Component);

exports["default"] = VideoList;
module.exports = exports["default"];

},{"../actions/VideoActions":5,"../stores/VideoStore":58,"./Description":23,"./VideoListItem":49,"react":"react","react-router":"react-router"}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Description = require("./Description");

var _Description2 = _interopRequireDefault(_Description);

var _reactRouter = require("react-router");

var VideoListItem = (function (_React$Component) {
	_inherits(VideoListItem, _React$Component);

	function VideoListItem() {
		_classCallCheck(this, VideoListItem);

		_get(Object.getPrototypeOf(VideoListItem.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(VideoListItem, [{
		key: "componentDidMount",

		// COMPONENT DID MOUNT
		value: function componentDidMount() {
			$(".channel-thumb").unveil();
		}

		// FORMAT DATE
	}, {
		key: "formatDate",
		value: function formatDate(unix) {
			var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var d = new Date(unix * 1000);
			return m[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			if (!this.props.video.channel) return null;

			return _react2["default"].createElement(
				"div",
				{ className: "row channel-row" },
				_react2["default"].createElement(
					"div",
					{ className: "col-md-2 col-xs-2" },
					_react2["default"].createElement(
						"center",
						null,
						_react2["default"].createElement("img", { src: "https://cdn.rawgit.com/thomasbrueggemann/sailing-channels/master/public/img/spacer.png", "data-src": "https://img.youtube.com/vi/" + this.props.video._id + "/default.jpg", className: "channel-thumb" })
					)
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-md-7 col-xs-10" },
					_react2["default"].createElement(
						"h3",
						null,
						_react2["default"].createElement(
							_reactRouter.Link,
							{ to: "/video/" + this.props.video._id },
							this.props.video.title
						)
					),
					_react2["default"].createElement(_Description2["default"], { text: this.props.video.description, video: true })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-md-3 col-xs-10 col-xs-offset-2 col-md-offset-0" },
					_react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(
							"b",
							null,
							"Channel:"
						),
						" ",
						_react2["default"].createElement(
							_reactRouter.Link,
							{ to: "/channel/" + this.props.video.channel._id },
							this.props.video.channel.title
						)
					),
					_react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(
							"b",
							null,
							"Views:"
						),
						" ",
						(this.props.video.views || 0).toLocaleString()
					),
					_react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(
							"b",
							null,
							"Likes:"
						),
						" ",
						_react2["default"].createElement("i", { className: "fa fa-thumbs-up fa-fw" }),
						" ",
						(this.props.video.likes || 0).toLocaleString(),
						" ",
						_react2["default"].createElement("i", { className: "fa fa-thumbs-down fa-fw" }),
						" ",
						(this.props.video.dislikes || 0).toLocaleString()
					),
					_react2["default"].createElement(
						"p",
						null,
						_react2["default"].createElement(
							"b",
							null,
							"Uploaded:"
						),
						" ",
						this.formatDate(this.props.video.publishedAt)
					),
					_react2["default"].createElement(
						_reactRouter.Link,
						{ to: "/video/" + this.props.video._id, className: "btn btn-default btn-sidebar btn-raised" },
						_react2["default"].createElement("i", { className: "fa fa-youtube-play" }),
						" Watch video"
					)
				)
			);
		}
	}]);

	return VideoListItem;
})(_react2["default"].Component);

exports["default"] = VideoListItem;
module.exports = exports["default"];

},{"./Description":23,"react":"react","react-router":"react-router"}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var ViewsHistoryChart = (function (_React$Component) {
	_inherits(ViewsHistoryChart, _React$Component);

	function ViewsHistoryChart() {
		_classCallCheck(this, ViewsHistoryChart);

		_get(Object.getPrototypeOf(ViewsHistoryChart.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(ViewsHistoryChart, [{
		key: "componentDidMount",

		// COMPONENT DID MOUNT
		value: function componentDidMount() {
			this.loadChart(this.props);
		}

		// COMPONENT WILL RECEIVE PROPS
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			this.loadChart(nextProps);
		}

		// LOAD CHART
	}, {
		key: "loadChart",
		value: function loadChart(props) {

			window.setTimeout(function () {
				var $el = $("#viewsChart_" + props.channel.id);

				// get canvas and set width
				var canvas = $el.get(0);
				canvas.width = $el.parent().width();

				// get context object
				var ctx = canvas.getContext("2d");

				// filter out values and dates for labels
				var values = props.channel.viewHist.map(function (item) {
					return item.views;
				});

				var labels = props.channel.viewHist.map(function (item) {
					var raw = item._id.date + "";
					var d = new Date(parseInt(raw.substr(0, 4)), parseInt(raw.substr(4, 2)) - 1, parseInt(raw.substr(6, 2)));
					return d.toLocaleDateString();
				});

				// prepare data
				var data = {
					labels: labels,
					datasets: [{
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: values
					}]
				};

				Chart.defaults.global.showScale = false;

				// draw line chart
				var ch = new Chart(ctx).Line(data, {
					"pointHitDetectionRadius": 5
				});
			}, 500);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {

			return _react2["default"].createElement("canvas", { id: "viewsChart_" + this.props.channel.id, height: "100" });
		}
	}]);

	return ViewsHistoryChart;
})(_react2["default"].Component);

exports["default"] = ViewsHistoryChart;
module.exports = exports["default"];

},{"react":"react"}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTTP = (function () {

	// CONSTRUCTOR

	function HTTP(debug) {
		_classCallCheck(this, HTTP);

		this.debug = debug || false;
	}

	// UNIX

	_createClass(HTTP, [{
		key: "unix",
		value: function unix() {
			return parseInt(new Date().getTime() / 1000);
		}

		// GET OBJECT
	}, {
		key: "getObject",
		value: function getObject(key) {
			key = key.split("&_=")[0];
			var value = localStorage.getItem(key);

			// check ttl
			var ttl = localStorage.getItem(key + "~ttl");
			if (ttl) {
				var expired = parseInt(ttl) > this.unix();
				if (expired) {
					localStorage.removeItem(key);
					localStorage.removeItem(key + "~ttl");
					return null;
				}
			}

			return value && JSON.parse(value);
		}

		// SET OBJECT
	}, {
		key: "setObject",
		value: function setObject(key, value, ttl) {
			key = key.split("&_=")[0];
			localStorage.setItem(key, JSON.stringify(value));

			if (ttl) {
				var expiring = this.unix() + parseInt(ttl);
				localStorage.setItem(key + "~ttl", expiring);
			}
		}

		// GET
	}, {
		key: "get",
		value: function get(o, callback) {
			var _this = this;

			var obj = $.extend({
				url: "",
				params: {},
				ttl: null,
				force: false,
				timeout: 10000,
				headers: {}
			}, o);

			var url = obj.url;

			// check if at least a url was given
			if (url.length === 0) {
				return callback({
					"error": "no url"
				});
			}

			// construct url from dictionary of parameters
			var i = 0;
			for (var k in obj.params) {
				if (i === 0) url += "?";else url += "&";

				url += k + "=" + obj.params[k];
				i++;
			}

			// try access the cache
			var cached = this.getObject("GET:" + url);
			if (cached !== null && obj.force === false && obj.cache === true) {
				if (this.debug) console.log(url + " [cache hit]");

				// render table with cached data
				return callback(null, cached);
			} else {

				if (this.debug) console.log(url + " [remote fetch]");

				$.ajax({
					"url": url,
					"method": "GET",
					"cache": false,
					"headers": obj.headers,
					"timeout": obj.timeout,
					"dataType": "json"
				}).done(function (data) {

					// add to cache with TTL
					if (obj.ttl) {
						_this.setObject("GET:" + url, data, obj.ttl);
					}

					// render table with remote data
					return callback(null, data);
				}).fail(function (xhr) {
					var data = JSON.parse(xhr.responseText);
					return callback({
						"statusCode": xhr.status,
						"error": data.error
					});
				});
			}
		}

		// POST
	}, {
		key: "post",
		value: function post(o, callback) {
			var _this2 = this;

			var obj = $.extend({
				url: "",
				data: {},
				ttl: null,
				force: false,
				timeout: 10000,
				headers: {}
			}, o);

			var url = obj.url;

			// check if at least a url was given
			if (url.length === 0) {
				return callback({
					"error": "no url"
				});
			}

			// try access the cache
			var cached = this.getObject("POST:" + url);
			if (cached && obj.force === false && obj.cache === true) {
				if (this.debug) console.log(url + " [cache hit]");

				// render table with cached data
				return callback(null, cached);
			} else {

				if (this.debug) console.log(url + " [remote fetch]");

				// no cached result, fetch portals from webservice
				$.ajax({
					"url": url,
					"method": "POST",
					"cache": false,
					"headers": obj.headers,
					"dataType": "json",
					"timeout": obj.timeout,
					"data": obj.data
				}).done(function (data) {

					// add to cache with TTL
					if (obj.ttl) {
						_this2.setObject("POST:" + url, data, obj.ttl);
					}

					// render table with remote data
					return callback(null, data);
				}).fail(function (xhr) {
					var data = JSON.parse(xhr.responseText);
					return callback({
						"statusCode": xhr.status,
						"error": data.error
					});
				});
			}
		}
	}]);

	return HTTP;
})();

exports["default"] = HTTP;
module.exports = exports["default"];

},{}],52:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _historyLibCreateBrowserHistory = require("history/lib/createBrowserHistory");

var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var history = (0, _historyLibCreateBrowserHistory2["default"])();
_reactDom2["default"].render(_react2["default"].createElement(
  _reactRouter2["default"],
  { history: history },
  _routes2["default"]
), document.getElementById("app"));

},{"./routes":53,"history/lib/createBrowserHistory":70,"react":"react","react-dom":"react-dom","react-router":"react-router"}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _componentsApp = require("./components/App");

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require("./components/Home");

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsSearchResult = require("./components/SearchResult");

var _componentsSearchResult2 = _interopRequireDefault(_componentsSearchResult);

var _componentsChannelDetail = require("./components/ChannelDetail");

var _componentsChannelDetail2 = _interopRequireDefault(_componentsChannelDetail);

var _componentsVideoDetail = require("./components/VideoDetail");

var _componentsVideoDetail2 = _interopRequireDefault(_componentsVideoDetail);

var _componentsDataCollection = require("./components/DataCollection");

var _componentsDataCollection2 = _interopRequireDefault(_componentsDataCollection);

var _componentsPrivacyPolicy = require("./components/PrivacyPolicy");

var _componentsPrivacyPolicy2 = _interopRequireDefault(_componentsPrivacyPolicy);

var _componentsImprint = require("./components/Imprint");

var _componentsImprint2 = _interopRequireDefault(_componentsImprint);

var _componentsContributions = require("./components/Contributions");

var _componentsContributions2 = _interopRequireDefault(_componentsContributions);

var _componentsLogin = require("./components/Login");

var _componentsLogin2 = _interopRequireDefault(_componentsLogin);

var _componentsMe = require("./components/Me");

var _componentsMe2 = _interopRequireDefault(_componentsMe);

var _componentsSupportUs = require("./components/SupportUs");

var _componentsSupportUs2 = _interopRequireDefault(_componentsSupportUs);

var _componentsAdminAdmin = require("./components/Admin/Admin");

var _componentsAdminAdmin2 = _interopRequireDefault(_componentsAdminAdmin);

var _componentsAdminDashboard = require("./components/Admin/Dashboard");

var _componentsAdminDashboard2 = _interopRequireDefault(_componentsAdminDashboard);

var _componentsAdminAdditional = require("./components/Admin/Additional");

var _componentsAdminAdditional2 = _interopRequireDefault(_componentsAdminAdditional);

var _componentsAdminBlacklist = require("./components/Admin/Blacklist");

var _componentsAdminBlacklist2 = _interopRequireDefault(_componentsAdminBlacklist);

var _componentsAdminFlags = require("./components/Admin/Flags");

var _componentsAdminFlags2 = _interopRequireDefault(_componentsAdminFlags);

var _componentsSuggest = require("./components/Suggest");

var _componentsSuggest2 = _interopRequireDefault(_componentsSuggest);

exports["default"] = _react2["default"].createElement(
	_reactRouter.Route,
	{ path: "/", component: _componentsApp2["default"] },
	_react2["default"].createElement(_reactRouter.IndexRoute, { component: _componentsHome2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "by-:sortBy", component: _componentsHome2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "channel/:id", component: _componentsChannelDetail2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "video/:id", component: _componentsVideoDetail2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "search/:query", component: _componentsSearchResult2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "how-it-works", component: _componentsDataCollection2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "suggest", component: _componentsSuggest2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "privacy", component: _componentsPrivacyPolicy2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "imprint", component: _componentsImprint2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "contributions", component: _componentsContributions2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "signin", component: _componentsLogin2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "support", component: _componentsSupportUs2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "me", component: _componentsMe2["default"] }),
	_react2["default"].createElement(
		_reactRouter.Route,
		{ path: "admin/", component: _componentsAdminAdmin2["default"] },
		_react2["default"].createElement(_reactRouter.IndexRoute, { component: _componentsAdminDashboard2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { path: "dashboard", component: _componentsAdminDashboard2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { path: "additional", component: _componentsAdminAdditional2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { path: "blacklist", component: _componentsAdminBlacklist2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { path: "flags", component: _componentsAdminFlags2["default"] })
	)
);
module.exports = exports["default"];

},{"./components/Admin/Additional":7,"./components/Admin/Admin":8,"./components/Admin/Blacklist":10,"./components/Admin/Dashboard":12,"./components/Admin/Flags":13,"./components/App":15,"./components/ChannelDetail":17,"./components/Contributions":21,"./components/DataCollection":22,"./components/Home":26,"./components/Imprint":27,"./components/Login":29,"./components/Me":31,"./components/PrivacyPolicy":35,"./components/SearchResult":37,"./components/Suggest":42,"./components/SupportUs":46,"./components/VideoDetail":47,"react":"react","react-router":"react-router"}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsAdminActions = require("../actions/AdminActions");

var _actionsAdminActions2 = _interopRequireDefault(_actionsAdminActions);

var AdminStore = (function () {
	function AdminStore() {
		_classCallCheck(this, AdminStore);

		this.bindActions(_actionsAdminActions2["default"]);
		this.blacklisted = [];
		this.additional = [];
		this.flags = [];
		this.loading = false;
	}

	// GET BLACKLISTED SUCCESS

	_createClass(AdminStore, [{
		key: "getBlacklistedSuccess",
		value: function getBlacklistedSuccess(result) {
			this.blacklisted = result;
			this.loading = false;
		}

		// GET BLACKLISTED FAIL
	}, {
		key: "getBlacklistedFail",
		value: function getBlacklistedFail(err) {
			this.loading = false;
		}

		// GET ADDITIONAL SUCCESS
	}, {
		key: "getAdditionalSuccess",
		value: function getAdditionalSuccess(result) {
			this.additional = result;
			this.loading = false;
		}

		// GET ADDITIONAL FAIL
	}, {
		key: "getAdditionalFail",
		value: function getAdditionalFail(err) {
			this.loading = false;
		}

		// GET ADDITIONAL SUCCESS
	}, {
		key: "addAdditionalSuccess",
		value: function addAdditionalSuccess(result) {
			this.additional.push(result);
			this.loading = false;
		}

		// GET ADDITIONAL FAIL
	}, {
		key: "addAdditionalFail",
		value: function addAdditionalFail(err) {
			this.loading = false;
		}
	}, {
		key: "deleteAdditionalSuccess",
		value: function deleteAdditionalSuccess(result) {
			this.additional = this.additional.filter(function (item) {
				return item._id != result._id;
			});
			this.loading = false;
		}
	}, {
		key: "deleteAdditionalFail",
		value: function deleteAdditionalFail(err) {
			this.loading = false;
		}

		// DELETE BLACKLISTED SUCCESS
	}, {
		key: "deleteBlacklistedSuccess",
		value: function deleteBlacklistedSuccess(result) {
			this.blacklisted = this.blacklisted.filter(function (item) {
				return item._id != result._id;
			});
			this.loading = false;
		}

		// GET ME FAIL
	}, {
		key: "deleteBlacklistedFail",
		value: function deleteBlacklistedFail(err) {
			this.loading = false;
		}
	}, {
		key: "addBlacklistedSuccess",
		value: function addBlacklistedSuccess(result) {
			this.blacklisted.push(result);
			this.loading = false;
		}
	}, {
		key: "addBlacklistedFail",
		value: function addBlacklistedFail(err) {
			this.loading = false;
		}
	}, {
		key: "getFlagsSuccess",
		value: function getFlagsSuccess(result) {
			this.flags = result;
			this.loading = false;
		}
	}, {
		key: "getFlagsFail",
		value: function getFlagsFail(err) {
			this.loading = false;
		}
	}, {
		key: "deleteFlagsSuccess",
		value: function deleteFlagsSuccess(result) {
			this.flags = this.flags.filter(function (item) {
				return item._id.channel != result._id.channel && item._id.user != result._id.user;
			});
			this.loading = false;
		}
	}, {
		key: "deleteFlagsFail",
		value: function deleteFlagsFail(err) {
			this.loading = false;
		}
	}]);

	return AdminStore;
})();

exports["default"] = _alt2["default"].createStore(AdminStore);
module.exports = exports["default"];

},{"../actions/AdminActions":1,"../alt":6}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsChannelActions = require("../actions/ChannelActions");

var _actionsChannelActions2 = _interopRequireDefault(_actionsChannelActions);

var ChannelStore = (function () {
	function ChannelStore() {
		_classCallCheck(this, ChannelStore);

		this.bindActions(_actionsChannelActions2["default"]);
		this.channels = [];
		this.results = [];
		this.loading = false;
		this.skip = 0;
		this.take = 25;
		this.sortBy = "subscribers";

		this.channel = null;
	}

	// GET CHANNELS SUCCESS

	_createClass(ChannelStore, [{
		key: "getChannelsSuccess",
		value: function getChannelsSuccess(result) {

			// add new data
			if (result.skip > 0) {
				this.channels = this.channels.concat(result.data);
			} else {
				this.channels = result.data;
			}

			this.skip = result.skip;
			this.take = result.take;
			this.loading = false;
		}

		// GET CHANNEL SUCCESS
	}, {
		key: "getChannelSuccess",
		value: function getChannelSuccess(result) {
			this.channel = result;
		}

		// GET CHANNEL FAIL
	}, {
		key: "getChannelFail",
		value: function getChannelFail(err) {

			// Handle multiple response formats, fallback to HTTP status code number.
			location.href = "/404";
		}

		// GET CHANNELS FAIL
	}, {
		key: "getChannelsFail",
		value: function getChannelsFail(err) {

			this.loading = false;

			// Handle multiple response formats, fallback to HTTP status code number.
			console.error(err);
		}

		// SEARCH CHANNELS SUCCESS
	}, {
		key: "searchChannelsSuccess",
		value: function searchChannelsSuccess(result) {

			this.results = result;
			this.loading = false;
		}

		// SEARCH CHANNELS FAIL
	}, {
		key: "searchChannelsFail",
		value: function searchChannelsFail(err) {

			this.loading = false;

			// Handle multiple response formats, fallback to HTTP status code number.
			console.error(err);
		}
	}]);

	return ChannelStore;
})();

exports["default"] = _alt2["default"].createStore(ChannelStore);
module.exports = exports["default"];

},{"../actions/ChannelActions":2,"../alt":6}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsLanguageActions = require("../actions/LanguageActions");

var _actionsLanguageActions2 = _interopRequireDefault(_actionsLanguageActions);

var LanguageStore = (function () {
	function LanguageStore() {
		_classCallCheck(this, LanguageStore);

		this.bindActions(_actionsLanguageActions2["default"]);
		this.languages = [];
		this.selectedLanguage = "en";
	}

	// GET LANGUAGES SUCCESS

	_createClass(LanguageStore, [{
		key: "getLanguagesSuccess",
		value: function getLanguagesSuccess(result) {

			this.languages = result.languages;
			this.selectedLanguage = result.selected;
		}

		// GET LANGUAGES FAIL
	}, {
		key: "getLanguagesFail",
		value: function getLanguagesFail(err) {
			console.error(err);
		}
	}]);

	return LanguageStore;
})();

exports["default"] = _alt2["default"].createStore(LanguageStore);
module.exports = exports["default"];

},{"../actions/LanguageActions":3,"../alt":6}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsMeActions = require("../actions/MeActions");

var _actionsMeActions2 = _interopRequireDefault(_actionsMeActions);

var MeStore = (function () {
	function MeStore() {
		_classCallCheck(this, MeStore);

		this.bindActions(_actionsMeActions2["default"]);
		this.me = {};
		this.loading = false;
		this.subscriptions = [];
	}

	// GET ME SUCCESS

	_createClass(MeStore, [{
		key: "getMeSuccess",
		value: function getMeSuccess(result) {
			this.me = result;
			this.loading = false;

			window.setTimeout(function () {
				if (!Modernizr.inputtypes.color) {
					$("input[type='color']").spectrum({
						preferredFormat: "hex"
					});
				}
			}, 100);
		}

		// GET ME FAIL
	}, {
		key: "getMeFail",
		value: function getMeFail(err) {
			this.loading = false;
			location.href = "/";
		}

		// GET SUBSCRIPTIONS SUCCESS
	}, {
		key: "getSubscriptionsSuccess",
		value: function getSubscriptionsSuccess(result) {
			this.subscriptions = result;
		}

		// GET SUBSCRIPTIONS FAIL
	}, {
		key: "getSubscriptionsFail",
		value: function getSubscriptionsFail(err) {
			console.error(err);
		}
	}]);

	return MeStore;
})();

exports["default"] = _alt2["default"].createStore(MeStore);
module.exports = exports["default"];

},{"../actions/MeActions":4,"../alt":6}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsVideoActions = require("../actions/VideoActions");

var _actionsVideoActions2 = _interopRequireDefault(_actionsVideoActions);

var VideoStore = (function () {
	function VideoStore() {
		_classCallCheck(this, VideoStore);

		this.bindActions(_actionsVideoActions2["default"]);
		this.videos = [];
		this.video = null;
		this.skip = 0;
		this.take = 5;
		this.fin = false;
	}

	// GET VIDEOS SUCCESS

	_createClass(VideoStore, [{
		key: "getVideosSuccess",
		value: function getVideosSuccess(result) {

			this.videos = result.data;
			this.skip = result.skip;
			this.take = result.take;
			this.fin = result.fin;
		}

		// GET VIDEOS FAIL
	}, {
		key: "getVideosFail",
		value: function getVideosFail(jqXhr) {

			// Handle multiple response formats, fallback to HTTP status code number.
			console.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
		}

		// GET VIDEO SUCCESS
	}, {
		key: "getVideoSuccess",
		value: function getVideoSuccess(result) {
			this.video = result;
			this.video.channel.id = this.video.channel._id;
		}

		// GET VIDEO FAIL
	}, {
		key: "getVideoFail",
		value: function getVideoFail(jqXhr) {

			// Handle multiple response formats, fallback to HTTP status code number.
			//console.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
			location.href = "/404";
		}
	}]);

	return VideoStore;
})();

exports["default"] = _alt2["default"].createStore(VideoStore);
module.exports = exports["default"];

},{"../actions/VideoActions":5,"../alt":6}],59:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":60,"./lib/keys.js":61}],60:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],61:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],62:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],63:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
}).call(this,require('_process'))
},{"_process":79}],64:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
}).call(this,require('_process'))
},{"./emptyFunction":62,"_process":79}],65:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],66:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],67:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))
},{"_process":79,"warning":172}],68:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],69:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],70:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":65,"./DOMStateStorage":67,"./DOMUtils":68,"./ExecutionEnvironment":69,"./createDOMHistory":71,"./parsePath":76,"_process":79,"invariant":78}],71:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./DOMUtils":68,"./ExecutionEnvironment":69,"./createHistory":72,"_process":79,"invariant":78}],72:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":65,"./AsyncUtils":66,"./createLocation":73,"./deprecate":74,"./parsePath":76,"./runTransitionHook":77,"deep-equal":59}],73:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":65,"./parsePath":76}],74:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],75:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],76:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./extractPath":75,"_process":79,"warning":172}],77:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":79,"warning":172}],78:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":79}],79:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],80:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

if (process.env.NODE_ENV !== 'production') {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

}).call(this,require('_process'))
},{"./lib/ReactPropTypesSecret":84,"_process":79,"fbjs/lib/invariant":63,"fbjs/lib/warning":64}],81:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./lib/ReactPropTypesSecret":84,"fbjs/lib/emptyFunction":62,"fbjs/lib/invariant":63}],82:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

}).call(this,require('_process'))
},{"./checkPropTypes":80,"./lib/ReactPropTypesSecret":84,"_process":79,"fbjs/lib/emptyFunction":62,"fbjs/lib/invariant":63,"fbjs/lib/warning":64}],83:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

}).call(this,require('_process'))
},{"./factoryWithThrowingShims":81,"./factoryWithTypeCheckers":82,"_process":79}],84:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],85:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSideEffect = require("react-side-effect");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _deepEqual = require("deep-equal");

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _HelmetConstantsJs = require("./HelmetConstants.js");

var _PlainComponent = require("./PlainComponent");

var _PlainComponent2 = _interopRequireDefault(_PlainComponent);

var HELMET_ATTRIBUTE = "data-react-helmet";

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = [].concat(_toConsumableArray(propsList)).reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var props = _step.value;

            if (props[property]) {
                return props[property];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return null;
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, "title");
    var innermostTemplate = getInnermostProperty(propsList, "titleTemplate");

    if (innermostTemplate && innermostTitle) {
        return innermostTemplate.replace(/\%s/g, innermostTitle);
    }

    return innermostTitle || "";
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, "onChangeClientState") || function () {};
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(validTags, propsList) {
    return propsList.filter(function (props) {
        return !Object.is(typeof props[_HelmetConstantsJs.TAG_NAMES.BASE], "undefined");
    }).map(function (props) {
        return props[_HelmetConstantsJs.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.keys(tag)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var attributeKey = _step2.value;

                    var lowerCaseAttributeKey = attributeKey.toLowerCase();

                    if (validTags.includes(lowerCaseAttributeKey)) {
                        return innermostBaseTag.concat(tag);
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                        _iterator2["return"]();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, validTags, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = new Map();

    var tagList = propsList.filter(function (props) {
        return !Object.is(typeof props[tagName], "undefined");
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = new Map();

        instanceTags.filter(function (tag) {
            var validAttributeKey = undefined;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(tag)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var attributeKey = _step3.value;

                    var lowerCaseAttributeKey = attributeKey.toLowerCase();

                    // Special rule with link tags, since rel and href are both valid tags, rel takes priority
                    if (validTags.includes(lowerCaseAttributeKey) && !(Object.is(validAttributeKey, _HelmetConstantsJs.TAG_PROPERTIES.REL) && Object.is(tag[validAttributeKey].toLowerCase(), "canonical")) && !(Object.is(lowerCaseAttributeKey, _HelmetConstantsJs.TAG_PROPERTIES.REL) && Object.is(tag[lowerCaseAttributeKey].toLowerCase(), "stylesheet"))) {
                        validAttributeKey = lowerCaseAttributeKey;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                        _iterator3["return"]();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            if (!validAttributeKey) {
                return false;
            }

            var value = tag[validAttributeKey].toLowerCase();

            if (!approvedSeenTags.has(validAttributeKey)) {
                approvedSeenTags.set(validAttributeKey, new Set());
            }

            if (!instanceSeenTags.has(validAttributeKey)) {
                instanceSeenTags.set(validAttributeKey, new Set());
            }

            if (!approvedSeenTags.get(validAttributeKey).has(value)) {
                instanceSeenTags.get(validAttributeKey).add(value);
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = instanceSeenTags.keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var attributeKey = _step4.value;

                var tagUnion = new Set([].concat(_toConsumableArray(approvedSeenTags.get(attributeKey)), _toConsumableArray(instanceSeenTags.get(attributeKey))));

                approvedSeenTags.set(attributeKey, tagUnion);
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                    _iterator4["return"]();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        instanceSeenTags.clear();
        return approvedTags;
    }, []).reverse();

    return tagList;
};

var updateTitle = function updateTitle(title) {
    document.title = title || document.title;
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector("head");
    var oldTags = [].concat(_toConsumableArray(headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]")));
    var newTags = [];
    var indexToDelete = undefined;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    newElement.setAttribute(attribute, tag[attribute]);
                }
            }

            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateTitleAsString = function generateTitleAsString(type, title) {
    var stringifiedMarkup = "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(title) + "</" + type + ">";

    return stringifiedMarkup;
};

var generateTagsAsString = function generateTagsAsString(type, tags) {
    var stringifiedMarkup = tags.map(function (tag) {
        var attributeHtml = Object.keys(tag).map(function (attribute) {
            var encodedValue = encodeSpecialCharacters(tag[attribute]);
            return attribute + "=\"" + encodedValue + "\"";
        }).join(" ");

        return "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (Object.is(type, _HelmetConstantsJs.TAG_NAMES.SCRIPT) ? "></" + type + ">" : "/>");
    }).join("");

    return stringifiedMarkup;
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title) {
    // assigning into an array to define toString function on it
    var component = [_react2["default"].createElement(_HelmetConstantsJs.TAG_NAMES.TITLE, _defineProperty({
        key: title
    }, HELMET_ATTRIBUTE, true), title)];

    return component;
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    /* eslint-disable react/display-name */
    var component = [].concat(_toConsumableArray(tags)).map(function (tag, i) {
        var mappedTag = _defineProperty({
            key: i
        }, HELMET_ATTRIBUTE, true);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstantsJs.REACT_TAG_MAP[attribute] || attribute;

            mappedTag[mappedAttribute] = tag[attribute];
        });

        return _react2["default"].createElement(type, mappedTag);
    });

    return component;
    /* eslint-enable react/display-name */
};

var getMethodsForTag = function getMethodsForTag(type, tags) {
    return {
        toComponent: type === _HelmetConstantsJs.TAG_NAMES.TITLE ? function () {
            return generateTitleAsReactComponent(type, tags);
        } : function () {
            return generateTagsAsReactComponent(type, tags);
        },
        toString: type === _HelmetConstantsJs.TAG_NAMES.TITLE ? function () {
            return generateTitleAsString(type, tags);
        } : function () {
            return generateTagsAsString(type, tags);
        }
    };
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var title = _ref.title;
    var baseTag = _ref.baseTag;
    var metaTags = _ref.metaTags;
    var linkTags = _ref.linkTags;
    var scriptTags = _ref.scriptTags;
    return {
        title: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.TITLE, title),
        base: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.BASE, baseTag),
        meta: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.META, metaTags),
        link: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.LINK, linkTags),
        script: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.SCRIPT, scriptTags)
    };
};

var Helmet = function Helmet(Component) {
    /* eslint-disable react/no-multi-comp */

    var HelmetWrapper = (function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            _get(Object.getPrototypeOf(HelmetWrapper.prototype), "constructor", this).apply(this, arguments);
        }

        /* eslint-enable react/no-multi-comp */

        _createClass(HelmetWrapper, [{
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                return !(0, _deepEqual2["default"])(this.props, nextProps);
            }
        }, {
            key: "render",
            value: function render() {
                return _react2["default"].createElement(Component, this.props);
            }
        }], [{
            key: "propTypes",

            /**
             * @param {String} title: "Title"
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {String} titleTemplate: "MySite.com - %s"
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} script: [{"src": "http://mysite.com/js/test.js", "type": "text/javascript"}]
             */
            value: {
                title: _react2["default"].PropTypes.string,
                onChangeClientState: _react2["default"].PropTypes.func,
                titleTemplate: _react2["default"].PropTypes.string,
                base: _react2["default"].PropTypes.object,
                meta: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object),
                link: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object),
                script: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object)
            },
            enumerable: true
        }, {
            key: "peek",
            value: Component.peek,
            enumerable: true
        }, {
            key: "rewind",
            value: function value() {
                var mappedState = Component.rewind();
                if (!mappedState) {
                    // provide fallback if mappedState is undefined
                    mappedState = mapStateOnServer({
                        title: "",
                        baseTag: [],
                        metaTags: [],
                        linkTags: [],
                        scriptTags: []
                    });
                }

                return mappedState;
            },
            enumerable: true
        }, {
            key: "canUseDOM",
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    })(_react2["default"].Component);

    return HelmetWrapper;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        title: getTitleFromPropsList(propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        baseTag: getBaseTagFromPropsList([_HelmetConstantsJs.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.META, [_HelmetConstantsJs.TAG_PROPERTIES.NAME, _HelmetConstantsJs.TAG_PROPERTIES.CHARSET, _HelmetConstantsJs.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstantsJs.TAG_PROPERTIES.PROPERTY], propsList),
        linkTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.LINK, [_HelmetConstantsJs.TAG_PROPERTIES.REL, _HelmetConstantsJs.TAG_PROPERTIES.HREF], propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.SCRIPT, [_HelmetConstantsJs.TAG_PROPERTIES.SRC], propsList)
    };
};

var handleClientStateChange = function handleClientStateChange(newState) {
    var title = newState.title;
    var baseTag = newState.baseTag;
    var metaTags = newState.metaTags;
    var linkTags = newState.linkTags;
    var scriptTags = newState.scriptTags;
    var onChangeClientState = newState.onChangeClientState;

    updateTitle(title);

    var tagUpdates = {
        scriptTags: updateTags(_HelmetConstantsJs.TAG_NAMES.SCRIPT, scriptTags),
        linkTags: updateTags(_HelmetConstantsJs.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstantsJs.TAG_NAMES.META, metaTags),
        baseTag: updateTags(_HelmetConstantsJs.TAG_NAMES.BASE, baseTag)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType];
        var newTags = _tagUpdates$tagType.newTags;
        var oldTags = _tagUpdates$tagType.oldTags;

        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    onChangeClientState(newState, addedTags, removedTags);
};

var SideEffect = (0, _reactSideEffect2["default"])(reducePropsToState, handleClientStateChange, mapStateOnServer);

// PlainComponent is used to be a blank component decorated by react-side-effect
exports["default"] = Helmet(SideEffect(_PlainComponent2["default"]));
module.exports = exports["default"];
},{"./HelmetConstants.js":86,"./PlainComponent":87,"deep-equal":59,"react":"react","react-side-effect":169}],86:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var TAG_NAMES = {
    TITLE: "title",
    BASE: "base",
    META: "meta",
    LINK: "link",
    SCRIPT: "script"
};

exports.TAG_NAMES = TAG_NAMES;
var TAG_PROPERTIES = {
    NAME: "name",
    CHARSET: "charset",
    HTTPEQUIV: "http-equiv",
    REL: "rel",
    HREF: "href",
    PROPERTY: "property",
    SRC: "src"
};

exports.TAG_PROPERTIES = TAG_PROPERTIES;
var REACT_TAG_MAP = {
    "charset": "charSet",
    "http-equiv": "httpEquiv"
};
exports.REACT_TAG_MAP = REACT_TAG_MAP;
},{}],87:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var PlainComponent = (function (_React$Component) {
    _inherits(PlainComponent, _React$Component);

    function PlainComponent() {
        _classCallCheck(this, PlainComponent);

        _get(Object.getPrototypeOf(PlainComponent.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(PlainComponent, [{
        key: "render",
        value: function render() {
            return null;
        }
    }]);

    return PlainComponent;
})(_react2["default"].Component);

exports["default"] = PlainComponent;
module.exports = exports["default"];
},{"react":"react"}],88:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("core-js/fn/array/from");

require("core-js/fn/array/includes");

require("core-js/fn/map");

require("core-js/fn/object/get-own-property-symbols");

require("core-js/fn/object/is");

require("core-js/fn/object/keys");

require("core-js/fn/set");

var _Helmet = require("./Helmet");

var _Helmet2 = _interopRequireDefault(_Helmet);

exports["default"] = _Helmet2["default"];
module.exports = exports["default"];
},{"./Helmet":85,"core-js/fn/array/from":89,"core-js/fn/array/includes":90,"core-js/fn/map":91,"core-js/fn/object/get-own-property-symbols":92,"core-js/fn/object/is":93,"core-js/fn/object/keys":94,"core-js/fn/set":95}],89:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":108,"../../modules/es6.array.from":150,"../../modules/es6.string.iterator":157}],90:[function(require,module,exports){
require('../../modules/es7.array.includes');
module.exports = require('../../modules/_core').Array.includes;
},{"../../modules/_core":108,"../../modules/es7.array.includes":159}],91:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":108,"../modules/es6.map":152,"../modules/es6.object.to-string":155,"../modules/es6.string.iterator":157,"../modules/es7.map.to-json":160,"../modules/web.dom.iterable":162}],92:[function(require,module,exports){
require('../../modules/es6.symbol');
module.exports = require('../../modules/_core').Object.getOwnPropertySymbols;
},{"../../modules/_core":108,"../../modules/es6.symbol":158}],93:[function(require,module,exports){
require('../../modules/es6.object.is');
module.exports = require('../../modules/_core').Object.is;
},{"../../modules/_core":108,"../../modules/es6.object.is":153}],94:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":108,"../../modules/es6.object.keys":154}],95:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
module.exports = require('../modules/_core').Set;
},{"../modules/_core":108,"../modules/es6.object.to-string":155,"../modules/es6.set":156,"../modules/es6.string.iterator":157,"../modules/es7.set.to-json":161,"../modules/web.dom.iterable":162}],96:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],97:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],98:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};
},{"./_hide":119,"./_wks":148}],99:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],100:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":123}],101:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":115}],102:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":142,"./_to-iobject":144,"./_to-length":145}],103:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":104,"./_wks":148}],104:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],105:[function(require,module,exports){
'use strict';
var $           = require('./_')
  , hide        = require('./_hide')
  , redefineAll = require('./_redefine-all')
  , ctx         = require('./_ctx')
  , anInstance  = require('./_an-instance')
  , defined     = require('./_defined')
  , forOf       = require('./_for-of')
  , $iterDefine = require('./_iter-define')
  , step        = require('./_iter-step')
  , setSpecies  = require('./_set-species')
  , DESCRIPTORS = require('./_descriptors')
  , fastKey     = require('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = $.create(null); // index
      that._f = undefined;      // first entry
      that._l = undefined;      // last entry
      that[SIZE] = 0;           // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_":96,"./_an-instance":99,"./_ctx":109,"./_defined":110,"./_descriptors":111,"./_for-of":115,"./_hide":119,"./_iter-define":126,"./_iter-step":128,"./_meta":132,"./_redefine-all":135,"./_set-species":138}],106:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":101,"./_classof":103}],107:[function(require,module,exports){
'use strict';
var global         = require('./_global')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , redefineAll    = require('./_redefine-all')
  , meta           = require('./_meta')
  , forOf          = require('./_for-of')
  , anInstance     = require('./_an-instance')
  , isObject       = require('./_is-object')
  , fails          = require('./_fails')
  , $iterDetect    = require('./_iter-detect')
  , setToStringTag = require('./_set-to-string-tag');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = new Base;
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":99,"./_export":113,"./_fails":114,"./_for-of":115,"./_global":117,"./_is-object":123,"./_iter-detect":127,"./_meta":132,"./_redefine":136,"./_redefine-all":135,"./_set-to-string-tag":139}],108:[function(require,module,exports){
var core = module.exports = {version: '2.0.3'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],109:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":97}],110:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],111:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":114}],112:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./_');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./_":96}],113:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , hide      = require('./_hide')
  , redefine  = require('./_redefine')
  , ctx       = require('./_ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target && !own)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":108,"./_ctx":109,"./_global":117,"./_hide":119,"./_redefine":136}],114:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],115:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./_an-object":100,"./_ctx":109,"./_is-array-iter":121,"./_iter-call":124,"./_to-length":145,"./core.get-iterator-method":149}],116:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , getNames  = require('./_').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : getNames(toIObject(it));
};
},{"./_":96,"./_to-iobject":144}],117:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],118:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],119:[function(require,module,exports){
var $          = require('./_')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_":96,"./_descriptors":111,"./_property-desc":134}],120:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":104}],121:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":129,"./_wks":148}],122:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":104}],123:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],124:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":100}],125:[function(require,module,exports){
'use strict';
var $              = require('./_')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_":96,"./_hide":119,"./_property-desc":134,"./_set-to-string-tag":139,"./_wks":148}],126:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getProto       = require('./_').getProto
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getProto($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_":96,"./_export":113,"./_has":118,"./_hide":119,"./_iter-create":125,"./_iterators":129,"./_library":131,"./_redefine":136,"./_set-to-string-tag":139,"./_wks":148}],127:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":148}],128:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],129:[function(require,module,exports){
module.exports = {};
},{}],130:[function(require,module,exports){
var $         = require('./_')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_":96,"./_to-iobject":144}],131:[function(require,module,exports){
module.exports = false;
},{}],132:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_').setDesc
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_":96,"./_fails":114,"./_has":118,"./_is-object":123,"./_uid":147}],133:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":108,"./_export":113,"./_fails":114}],134:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],135:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};
},{"./_redefine":136}],136:[function(require,module,exports){
// add fake Function#toString
// for correct work wrapped methods / constructors with methods like LoDash isNative
var global    = require('./_global')
  , hide      = require('./_hide')
  , SRC       = require('./_uid')('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  if(typeof val == 'function'){
    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    val.hasOwnProperty('name') || hide(val, 'name', key);
  }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
},{"./_core":108,"./_global":117,"./_hide":119,"./_uid":147}],137:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],138:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , $           = require('./_')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_":96,"./_descriptors":111,"./_global":117,"./_wks":148}],139:[function(require,module,exports){
var def = require('./_').setDesc
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_":96,"./_has":118,"./_wks":148}],140:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":117}],141:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":110,"./_to-integer":143}],142:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":143}],143:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],144:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":110,"./_iobject":120}],145:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":143}],146:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":110}],147:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],148:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';
module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};
},{"./_global":117,"./_shared":140,"./_uid":147}],149:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":103,"./_core":108,"./_iterators":129,"./_wks":148}],150:[function(require,module,exports){
'use strict';
var ctx         = require('./_ctx')
  , $export     = require('./_export')
  , toObject    = require('./_to-object')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method');
$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_ctx":109,"./_export":113,"./_is-array-iter":121,"./_iter-call":124,"./_iter-detect":127,"./_to-length":145,"./_to-object":146,"./core.get-iterator-method":149}],151:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":98,"./_iter-define":126,"./_iter-step":128,"./_iterators":129,"./_to-iobject":144}],152:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.1 Map Objects
module.exports = require('./_collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":107,"./_collection-strong":105}],153:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', {is: require('./_same-value')});
},{"./_export":113,"./_same-value":137}],154:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');

require('./_object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-sap":133,"./_to-object":146}],155:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof')
  , test    = {};
test[require('./_wks')('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  require('./_redefine')(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}
},{"./_classof":103,"./_redefine":136,"./_wks":148}],156:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.2 Set Objects
module.exports = require('./_collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./_collection":107,"./_collection-strong":105}],157:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":126,"./_string-at":141}],158:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./_')
  , global         = require('./_global')
  , core           = require('./_core')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , keyOf          = require('./_keyof')
  , $names         = require('./_get-names')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , createDesc     = require('./_property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , ObjectProto    = Object.prototype
  , USE_NATIVE     = typeof $Symbol == 'function';

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , replacer, $replacer;
  while(arguments.length > i)args.push(arguments[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var BUGGY_JSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var Wrapper = core.Symbol
    , sym     = wks(it);
  if(!(it in Wrapper))setDesc(Wrapper, it, {value: USE_NATIVE ? sym : wrap(sym)});
});

setter = true;

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_":96,"./_an-object":100,"./_core":108,"./_descriptors":111,"./_enum-keys":112,"./_export":113,"./_fails":114,"./_get-names":116,"./_global":117,"./_has":118,"./_is-array":122,"./_keyof":130,"./_library":131,"./_meta":132,"./_property-desc":134,"./_redefine":136,"./_set-to-string-tag":139,"./_shared":140,"./_to-iobject":144,"./_uid":147,"./_wks":148}],159:[function(require,module,exports){
'use strict';
var $export   = require('./_export')
  , $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  // https://github.com/domenic/Array.prototype.includes
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');
},{"./_add-to-unscopables":98,"./_array-includes":102,"./_export":113}],160:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":106,"./_export":113}],161:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Set', {toJSON: require('./_collection-to-json')('Set')});
},{"./_collection-to-json":106,"./_export":113}],162:[function(require,module,exports){
var $iterators     = require('./es6.array.iterator')
  , redefine       = require('./_redefine')
  , global         = require('./_global')
  , hide           = require('./_hide')
  , Iterators      = require('./_iterators')
  , wks            = require('./_wks')
  , ITERATOR       = wks('iterator')
  , TO_STRING_TAG  = wks('toStringTag')
  , ArrayValues    = Iterators.Array;

require('./_').each.call(['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], function(NAME){
  var Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
});
},{"./_":96,"./_global":117,"./_hide":119,"./_iterators":129,"./_redefine":136,"./_wks":148,"./es6.array.iterator":151}],163:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function lazyload(WrappedComponent) {
    return function (_Component) {
      _inherits(LazyLoadDecorated, _Component);

      function LazyLoadDecorated() {
        _classCallCheck(this, LazyLoadDecorated);

        var _this = _possibleConstructorReturn(this, (LazyLoadDecorated.__proto__ || Object.getPrototypeOf(LazyLoadDecorated)).call(this));

        _this.displayName = 'LazyLoad' + getDisplayName(WrappedComponent);
        return _this;
      }

      _createClass(LazyLoadDecorated, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            _index2.default,
            options,
            _react2.default.createElement(WrappedComponent, this.props)
          );
        }
      }]);

      return LazyLoadDecorated;
    }(_react.Component);
  };
};
},{"./index":164,"react":"react"}],164:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forceCheck = exports.lazyload = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _event = require('./utils/event');

var _scrollParent = require('./utils/scrollParent');

var _scrollParent2 = _interopRequireDefault(_scrollParent);

var _debounce = require('./utils/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _throttle = require('./utils/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _decorator = require('./decorator');

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-lazyload
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultBoundingClientRect = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
var LISTEN_FLAG = 'data-lazyload-listened';
var listeners = [];
var pending = [];

/**
 * Check if `component` is visible in overflow container `parent`
 * @param  {node} component React component
 * @param  {node} parent    component's scroll parent
 * @return {bool}
 */
var checkOverflowVisible = function checkOverflowVisible(component, parent) {
  var node = _reactDom2.default.findDOMNode(component);

  var parentTop = void 0;
  var parentHeight = void 0;

  try {
    var _parent$getBoundingCl = parent.getBoundingClientRect();

    parentTop = _parent$getBoundingCl.top;
    parentHeight = _parent$getBoundingCl.height;
  } catch (e) {
    parentTop = defaultBoundingClientRect.top;
    parentHeight = defaultBoundingClientRect.height;
  }

  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

  // calculate top and height of the intersection of the element's scrollParent and viewport
  var intersectionTop = Math.max(parentTop, 0); // intersection's top relative to viewport
  var intersectionHeight = Math.min(windowInnerHeight, parentTop + parentHeight) - intersectionTop; // height

  // check whether the element is visible in the intersection
  var top = void 0;
  var height = void 0;

  try {
    var _node$getBoundingClie = node.getBoundingClientRect();

    top = _node$getBoundingClie.top;
    height = _node$getBoundingClie.height;
  } catch (e) {
    top = defaultBoundingClientRect.top;
    height = defaultBoundingClientRect.height;
  }

  var offsetTop = top - intersectionTop; // element's top relative to intersection

  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API

  return offsetTop - offsets[0] <= intersectionHeight && offsetTop + height + offsets[1] >= 0;
};

/**
 * Check if `component` is visible in document
 * @param  {node} component React component
 * @return {bool}
 */
var checkNormalVisible = function checkNormalVisible(component) {
  var node = _reactDom2.default.findDOMNode(component);

  var top = void 0;
  var elementHeight = void 0;

  try {
    var _node$getBoundingClie2 = node.getBoundingClientRect();

    top = _node$getBoundingClie2.top;
    elementHeight = _node$getBoundingClie2.height;
  } catch (e) {
    top = defaultBoundingClientRect.top;
    elementHeight = defaultBoundingClientRect.height;
  }

  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API

  return top - offsets[0] <= windowInnerHeight && top + elementHeight + offsets[1] >= 0;
};

/**
 * Detect if element is visible in viewport, if so, set `visible` state to true.
 * If `once` prop is provided true, remove component as listener after checkVisible
 *
 * @param  {React} component   React component that respond to scroll and resize
 */
var checkVisible = function checkVisible(component) {
  var node = _reactDom2.default.findDOMNode(component);
  if (!node) {
    return;
  }

  var parent = (0, _scrollParent2.default)(node);
  var isOverflow = component.props.overflow && parent !== node.ownerDocument && parent !== document && parent !== document.documentElement;
  var visible = isOverflow ? checkOverflowVisible(component, parent) : checkNormalVisible(component);

  if (visible) {
    // Avoid extra render if previously is visible, yeah I mean `render` call,
    // not actual DOM render
    if (!component.visible) {
      if (component.props.once) {
        pending.push(component);
      }

      component.visible = true;
      component.forceUpdate();
    }
  } else if (!(component.props.once && component.visible)) {
    component.visible = false;
    if (component.props.unmountIfInvisible) {
      component.forceUpdate();
    }
  }
};

var purgePending = function purgePending() {
  pending.forEach(function (component) {
    var index = listeners.indexOf(component);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  });

  pending = [];
};

var lazyLoadHandler = function lazyLoadHandler() {
  for (var i = 0; i < listeners.length; ++i) {
    var listener = listeners[i];
    checkVisible(listener);
  }

  // Remove `once` component in listeners
  purgePending();
};

// Depending on component's props
var delayType = void 0;
var finalLazyLoadHandler = null;

var LazyLoad = function (_Component) {
  _inherits(LazyLoad, _Component);

  function LazyLoad(props) {
    _classCallCheck(this, LazyLoad);

    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));

    _this.visible = false;
    return _this;
  }

  _createClass(LazyLoad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
        if (_react2.default.Children.count(this.props.children) > 1) {
          console.warn('[react-lazyload] Only one child is allowed to be passed to `LazyLoad`.');
        }

        if (this.props.wheel) {
          // eslint-disable-line
          console.warn('[react-lazyload] Props `wheel` is not supported anymore, try set `overflow` for lazy loading in overflow containers.');
        }

        // Warn the user if placeholder and height is not specified and the rendered height is 0
        if (!this.props.placeholder && this.props.height === undefined && _reactDom2.default.findDOMNode(this).offsetHeight === 0) {
          console.warn('[react-lazyload] Please add `height` props to <LazyLoad> for better performance.');
        }
      }

      // It's unlikely to change delay type on the fly, this is mainly
      // designed for tests
      var needResetFinalLazyLoadHandler = false;
      if (this.props.debounce !== undefined && delayType === 'throttle') {
        console.warn('[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously');
        needResetFinalLazyLoadHandler = true;
      } else if (delayType === 'debounce' && this.props.debounce === undefined) {
        console.warn('[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously');
        needResetFinalLazyLoadHandler = true;
      }

      if (needResetFinalLazyLoadHandler) {
        (0, _event.off)(window, 'scroll', finalLazyLoadHandler);
        (0, _event.off)(window, 'resize', finalLazyLoadHandler);
        finalLazyLoadHandler = null;
      }

      if (!finalLazyLoadHandler) {
        if (this.props.debounce !== undefined) {
          finalLazyLoadHandler = (0, _debounce2.default)(lazyLoadHandler, typeof this.props.debounce === 'number' ? this.props.debounce : 300);
          delayType = 'debounce';
        } else {
          finalLazyLoadHandler = (0, _throttle2.default)(lazyLoadHandler, typeof this.props.throttle === 'number' ? this.props.throttle : 300);
          delayType = 'throttle';
        }
      }

      if (this.props.overflow) {
        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));
        if (parent && typeof parent.getAttribute === 'function') {
          var listenerCount = 1 + +parent.getAttribute(LISTEN_FLAG);
          if (listenerCount === 1) {
            parent.addEventListener('scroll', finalLazyLoadHandler);
          }
          parent.setAttribute(LISTEN_FLAG, listenerCount);
        }
      } else if (listeners.length === 0 || needResetFinalLazyLoadHandler) {
        var _props = this.props,
            scroll = _props.scroll,
            resize = _props.resize;


        if (scroll) {
          (0, _event.on)(window, 'scroll', finalLazyLoadHandler);
        }

        if (resize) {
          (0, _event.on)(window, 'resize', finalLazyLoadHandler);
        }
      }

      listeners.push(this);
      checkVisible(this);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return this.visible;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.overflow) {
        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));
        if (parent && typeof parent.getAttribute === 'function') {
          var listenerCount = +parent.getAttribute(LISTEN_FLAG) - 1;
          if (listenerCount === 0) {
            parent.removeEventListener('scroll', finalLazyLoadHandler);
            parent.removeAttribute(LISTEN_FLAG);
          } else {
            parent.setAttribute(LISTEN_FLAG, listenerCount);
          }
        }
      }

      var index = listeners.indexOf(this);
      if (index !== -1) {
        listeners.splice(index, 1);
      }

      if (listeners.length === 0) {
        (0, _event.off)(window, 'resize', finalLazyLoadHandler);
        (0, _event.off)(window, 'scroll', finalLazyLoadHandler);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.visible ? this.props.children : this.props.placeholder ? this.props.placeholder : _react2.default.createElement('div', { style: { height: this.props.height }, className: 'lazyload-placeholder' });
    }
  }]);

  return LazyLoad;
}(_react.Component);

LazyLoad.propTypes = {
  once: _propTypes2.default.bool,
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  offset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
  overflow: _propTypes2.default.bool,
  resize: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  throttle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  debounce: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  placeholder: _propTypes2.default.node,
  unmountIfInvisible: _propTypes2.default.bool
};

LazyLoad.defaultProps = {
  once: false,
  offset: 0,
  overflow: false,
  resize: false,
  scroll: true,
  unmountIfInvisible: false
};

var lazyload = exports.lazyload = _decorator2.default;
exports.default = LazyLoad;
exports.forceCheck = lazyLoadHandler;
}).call(this,require('_process'))
},{"./decorator":163,"./utils/debounce":165,"./utils/event":166,"./utils/scrollParent":167,"./utils/throttle":168,"_process":79,"prop-types":83,"react":"react","react-dom":"react-dom"}],165:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
function debounce(func, wait, immediate) {
  var timeout = void 0;
  var args = void 0;
  var context = void 0;
  var timestamp = void 0;
  var result = void 0;

  var later = function later() {
    var last = +new Date() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = null;
          args = null;
        }
      }
    }
  };

  return function debounced() {
    context = this;
    args = arguments;
    timestamp = +new Date();

    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      result = func.apply(context, args);
      context = null;
      args = null;
    }

    return result;
  };
}
},{}],166:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.off = off;
function on(el, eventName, callback) {
  if (el.addEventListener) {
    el.addEventListener(eventName, callback, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + eventName, function (e) {
      callback.call(el, e || window.event);
    });
  }
}

function off(el, eventName, callback) {
  if (el.removeEventListener) {
    el.removeEventListener(eventName, callback);
  } else if (el.detachEvent) {
    el.detachEvent("on" + eventName, callback);
  }
}
},{}],167:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @fileOverview Find scroll parent
 */

exports.default = function (node) {
  if (!node) {
    return document.documentElement;
  }

  var excludeStaticParent = node.style.position === 'absolute';
  var overflowRegex = /(scroll|auto)/;
  var parent = node;

  while (parent) {
    if (!parent.parentNode) {
      return node.ownerDocument || document.documentElement;
    }

    var style = window.getComputedStyle(parent);
    var position = style.position;
    var overflow = style.overflow;
    var overflowX = style['overflow-x'];
    var overflowY = style['overflow-y'];

    if (position === 'static' && excludeStaticParent) {
      continue;
    }

    if (overflowRegex.test(overflow) && overflowRegex.test(overflowX) && overflowRegex.test(overflowY)) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return node.ownerDocument || node.documentElement || document.documentElement;
};
},{}],168:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throttle;
/*eslint-disable */
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date(),
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
},{}],169:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fbjsLibExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var _fbjsLibExecutionEnvironment2 = _interopRequireDefault(_fbjsLibExecutionEnvironment);

var _fbjsLibShallowEqual = require('fbjs/lib/shallowEqual');

var _fbjsLibShallowEqual2 = _interopRequireDefault(_fbjsLibShallowEqual);

module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = undefined;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = (function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        _Component.apply(this, arguments);
      }

      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may ony call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !_fbjsLibShallowEqual2['default'](nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return _react2['default'].createElement(WrappedComponent, this.props);
      };

      _createClass(SideEffect, null, [{
        key: 'displayName',

        // Try to use displayName of wrapped component
        value: 'SideEffect(' + getDisplayName(WrappedComponent) + ')',

        // Expose canUseDOM so tests can monkeypatch it
        enumerable: true
      }, {
        key: 'canUseDOM',
        value: _fbjsLibExecutionEnvironment2['default'].canUseDOM,
        enumerable: true
      }]);

      return SideEffect;
    })(_react.Component);

    return SideEffect;
  };
};
},{"fbjs/lib/ExecutionEnvironment":170,"fbjs/lib/shallowEqual":171,"react":"react"}],170:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

'use strict';

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;
},{}],171:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
},{}],172:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"_process":79}]},{},[52]);
