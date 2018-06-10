webpackJsonp([26], {
	"./app/components/SubscribeButton/index.js": function(e, n, t) {
		"use strict";
		function s(e, n) {
			if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
		}
		function i(e, n) {
			if (!e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
		}
		function a(e, n) {
			if ("function" != typeof n && null !== n)
				throw new TypeError(
					"Super expression must either be null or a function, not " + typeof n
				);
			(e.prototype = Object.create(n && n.prototype, {
				constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
			})),
				n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
		}
		Object.defineProperty(n, "__esModule", { value: !0 });
		var o = t("./node_modules/react/index.js"),
			r = t.n(o),
			b = t("./app/actions/ChannelActions.js"),
			u = t("./node_modules/react-cookie/index.js"),
			c = t.n(u),
			d = t("./node_modules/jquery/dist/jquery.js"),
			l = t.n(d),
			f = (function() {
				var e =
					("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) ||
					60103;
				return function(n, t, s, i) {
					var a = n && n.defaultProps,
						o = arguments.length - 3;
					if ((t || 0 === o || (t = {}), t && a))
						for (var r in a) void 0 === t[r] && (t[r] = a[r]);
					else t || (t = a || {});
					if (1 === o) t.children = i;
					else if (o > 1) {
						for (var b = Array(o), u = 0; u < o; u++) b[u] = arguments[u + 3];
						t.children = b;
					}
					return {
						$$typeof: e,
						type: n,
						key: void 0 === s ? null : "" + s,
						ref: null,
						props: t,
						_owner: null
					};
				};
			})(),
			p = (function() {
				function e(e, n) {
					for (var t = 0; t < n.length; t++) {
						var s = n[t];
						(s.enumerable = s.enumerable || !1),
							(s.configurable = !0),
							"value" in s && (s.writable = !0),
							Object.defineProperty(e, s.key, s);
					}
				}
				return function(n, t, s) {
					return t && e(n.prototype, t), s && e(n, s), n;
				};
			})(),
			h = f("i", { className: "fa fa-youtube-play" }),
			y = f(
				"button",
				{
					className: "hidden-xs btn btn-danger btn-sidebar btn-raised",
					disabled: "disabled"
				},
				void 0,
				f("i", { className: "fa fa-spinner fa-pulse" })
			),
			m = f("span", {}, void 0, f("i", { className: "fa fa-youtube-play" }), " Subscribe"),
			v = f(
				"button",
				{ className: "hidden-xs btn btn-sidebar btn-raised", disabled: "disabled" },
				void 0,
				f("i", { className: "fa fa-spinner fa-pulse" })
			),
			g = f("span", {}, void 0, f("i", { className: "fa fa-youtube-play" }), " Unsubscribe"),
			S = (function(e) {
				function n(e) {
					s(this, n);
					var t = i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
					return (t.state = { subscribed: e.channel.subscribed, loading: !1 }), t;
				}
				return (
					a(n, e),
					p(n, [
						{
							key: "subscribeChannel",
							value: function(e) {
								var n = this;
								this.setState({ subscribed: this.state.subscribed, loading: !0 }),
									b.a.subscribe(this.props.channel.id, function(e, t) {
										e || !0 !== t.success
											? n.setState({
													subscribed: n.state.subscribed,
													loading: !1
											  })
											: n.setState({ subscribed: !0, loading: !1 });
									});
							}
						},
						{
							key: "unsubscribeChannel",
							value: function(e) {
								var n = this;
								this.setState({ subscribed: this.state.subscribed, loading: !0 }),
									b.a.unsubscribe(this.props.channel.id, function(e, t) {
										e || !0 !== t.success
											? n.setState({
													subscribed: n.state.subscribed,
													loading: !1
											  })
											: n.setState({ subscribed: !1, loading: !1 });
									});
							}
						},
						{
							key: "showSignInBanner",
							value: function() {
								(l()("#signin-dialog").data("bs.modal") || {}).isShown ||
									l()("#signin-dialog").modal("show");
							}
						},
						{
							key: "render",
							value: function() {
								return c.a.load("me")
									? !1 === this.state.subscribed
										? !0 === this.state.loading
											? y
											: f(
													"button",
													{
														onClick: this.subscribeChannel.bind(this),
														className:
															"hidden-xs btn btn-danger btn-sidebar btn-raised"
													},
													void 0,
													m
											  )
										: !0 === this.state.loading
											? v
											: f(
													"button",
													{
														onClick: this.unsubscribeChannel.bind(this),
														className:
															"hidden-xs btn btn-sidebar btn-raised"
													},
													void 0,
													g
											  )
									: f(
											"button",
											{
												onClick: this.showSignInBanner.bind(this),
												className:
													"hidden-xs btn btn-danger btn-sidebar btn-raised"
											},
											void 0,
											h,
											" Subscribe"
									  );
							}
						}
					]),
					n
				);
			})(r.a.Component);
		n.default = S;
	}
});