const config = require("../config");
const twit = require("twit");
require("dotenv");
const Twitter = new twit(config.twitter);

const favorite = () => {
	let params = {
		q: config.twitterConfig.queryString,
		// result_type: "recent",
		lang: "en",
	};

	Twitter.get("search/tweets", params, (err, data) => {
		if (err) {
			console.log("ERROR: Cannot search tweet");
		}
		let tweetId = data.search_metadata.max_id_str;

		Twitter.post("favorites/create", { id: tweetId }, function (
			err,
			response
		) {
			if (err) {
				console.log("ERROR: in favourite");
			} else if (response) {
				console.log("SUCCESS: Favourite Successful");
			}
			// console.log(response);
		});
	});
};

module.exports = favorite;
