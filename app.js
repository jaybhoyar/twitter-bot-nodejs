const express = require("express");
const config = require("./config.js");
const favorite = require("./routes/favourite");
const retweet = require("./routes/retweet");

require("dotenv").config();
// express initiate
const app = express();

// functions
setInterval(favorite, config.favoriteRate);
setInterval(retweet, config.retweetRate);

//
const listener = app.listen(process.env.PORT, () => {
	console.log("Your app is listening  port " + listener.address().port);
});
