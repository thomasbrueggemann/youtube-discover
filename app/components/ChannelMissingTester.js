import React, { Component } from "react";
import { Link } from "react-router";
import HTTP from "../helpers/http";
import SuggestChannelsList from "./SuggestChannelsList";

class ChannelMissingTester extends Component {
	// CONSTRUCTOR
	constructor(props) {
		super(props);
		this.state = {
			channelValue: "",
			checkChannelResult: null,
			checking: false
		};
	}

	// HANDLE CHANGE
	handleChange(event) {
		const v = event.target.value;

		this.setState({
			channelValue: v,
			checking: v.length > 0,
			checkChannelResult: null
		});

		new HTTP().post(
			{
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
			},
			(err, data) => {
				if (err || !data) {
					this.setState({
						checkChannelResult: null,
						channel: null,
						checking: false
					});
				} else {
					if (data[0].src === null) {
						this.setState({
							checkChannelResult: false,
							channel: null,
							checking: false
						});
					} else {
						this.setState({
							checkChannelResult: data[0].src === "db",
							channel: data[0],
							checking: false
						});
					}
				}
			}
		);
	}

	// RENDER
	render() {
		return (
			<div>
				<center>
					<input
						type="text"
						placeholder="https://youtube.com/channel/..."
						style={{ width: "80%" }}
						className="form-control"
						value={this.state.channelValue}
						onChange={this.handleChange.bind(this)}
					/>

					{this.state.checking ? <p>Checking...</p> : null}
				</center>

				{this.state.checkChannelResult === false ? (
					<SuggestChannelsList channels={[this.state.channel]} />
				) : null}

				{this.state.checkChannelResult === true ? (
					<p className="text text-success">
						Well, this channel is already listed:{" "}
						<Link to={"/channel/" + this.state.channel._id}>
							{this.state.channel.data.title}
						</Link>
					</p>
				) : null}

				{this.state.checkChannelResult === false ? (
					<p className="text text-warning">
						This is not a valid YouTube channel!
					</p>
				) : null}
			</div>
		);
	}
}

export default ChannelMissingTester;
