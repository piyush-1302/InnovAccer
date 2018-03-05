module.exports = function(arg,T,async,userDetails){
	console.log("hello")
		var params = { 
			q: arg,
 			count: 10
		}
		T.get('search/tweets', params,searchedData);
		function searchedData(err, data, response) {
			for(var i=0;i<data.statuses.length;i++){
				console.log("inserting")
				async.each(["ss"],function(item,callback){
					if(data.statuses[i].retweeted_status){
						new userDetails({
							"name"	: data.statuses[i].user.name,
							"screenName"	: data.statuses[i].user.screen_name,
							"location"		: data.statuses[i].user.location,
							"followersCount"	: data.statuses[i].user.followers_count,
							"friendsCount"		: data.statuses[i].user.friends_count,
							"listedCount"		: data.statuses[i].user.listed_count,
							"favouritesCount"	: data.statuses[i].user.favourites_count,
							"language"			: data.statuses[i].user.lang,
							"creationDate"		: data.statuses[i].retweeted_status.created_at,
							"tweet"			: {
								"text"	: data.statuses[i].retweeted_status.text,
								"RetweetCount"	: data.statuses[i].retweet_count
							}
						}).save((err,data)=>{
							if(err)
								throw err
							else{
								console.log(data)
							}
						})
				}
				},function(){
					console.log("1")
					
				})
			}}
}