module.exports = {
	twitter: {
		consumer_key: process.env.consumer_key,
		consumer_secret: process.env.consumer_secret,
		access_token: process.env.access_token,
		access_token_secret: process.env.access_token_secret
	},
	twitterConfig: {
		queryString: "#altcampus OR #AltCampus OR #js OR #javascript"
		// blackList:
		//   "reactdom,_adeeb,subjecttoreview,stacktrender,adaltarecruit,heroes_bot,_30days30sites,droidscott,scottbottest"
	},
	retweetRate: 50000,
	favoriteRate: 30000
};
