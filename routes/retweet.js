"use strict";
const config = require("../config");
const twit = require("twit");
require("dotenv");
const Twitter = new twit(config.twitter);

const retweet = () => {
	let params = {
		q: config.twitterConfig.queryString,
		result_type: "recent",
		lang: "en",
	};

	Twitter.get("search/tweets", params, (err, data, response) => {
		if (err) console.log("ERROR: Cannot search tweet");
		let retweetId = data.search_metadata.max_id_str;
		console.log(data.search_metadata.max_id_str);

		Twitter.post(
			"statuses/retweet/:id",
			{ id: retweetId },
			(err, response) => {
				if (err) {
					console.log("ERROR:", err);
				} else if (response) {
					console.log("SUCCESS: Retweet Successfull");
				}
			}
		);
	});
};

module.exports = retweet;
