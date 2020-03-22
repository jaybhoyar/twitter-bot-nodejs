const config = require("./config.js");
const twit = require("twit");
const Twitter = new twit(config.twitter);

const favorite = () => {
	let params = {
		query: config.twitterConfig.queryString,
		result_type: "recent",
		lang: "en"
	};

	Twitter.get("search/tweets", params, (err, data) => {
		if (err) {
			console.log("ERROR: Cannot search tweet");
		}
		let tweetId = data.search_metadata.max_id_str;

		Twitter.post("favorites/create", { id: tweetId }, (err, response) => {
			if (err) {
				console.log("ERROR: in Retweeting");
			}
			console.log(response);
		});
	});
};

module.exports = favorite;
