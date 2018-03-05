const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var datetime = require('node-datetime');
const twit = require('twit');
const request = require('request')
const app = express();
const port = process.env.PORT || 7000;
var config = require('./config/config.js');
var T = new twit(config)
mongoose.connect(process.env.MONGOLAB_URI||"mongodb://pk1302:kr1302@ds137246.mlab.com:37246/innovaccer"	);
require('./models/Details');
require('./models/Tweet');
require('./models/Retweet');
var userDetails = mongoose.model('Details');
var tweets = mongoose.model('Tweet');
var retweetUder = mongoose.model('Retweet');
var async = require("async")



app.listen(port,function(err){
	if(err)
		console.log(err);
	else
		console.log("Server is up at " + port);
});

const id = process.argv[2];
var tweet = ""
if(id == 3){
	console.log(process.argv.length)
	for(var i=3;i<process.argv.length;i++){
		if(i == process.argv.length - 1){
			tweet = tweet + process.argv[i];
			continue;
		}
		tweet = tweet + process.argv[i] + " ";
	}
}
else if(id == 4){
	var r1 = process.argv[3];
	var r2 = process.argv[4];
}
else{
	var arg = process.argv[3]
}
console.log(id)

	if(id == 1){
		require("./insert.js")(arg,T,async,userDetails)
	}
	if(id == 3){
		require("./textSearch.js")(userDetails,tweet)
	}
	if(id == 2){
		require("./sorting.js")(userDetails,arg)
	}
	if(id == 4){
		require("./retweetCount.js")(userDetails,r1,r2)
	}

		
				
			
			
		
		
	


















/*


40
down vote
accepted
JavaScript has built-in support for dates. First, to get your string into a Date object:

date =  new Date('Thu Dec 29 2011 20:14:56 GMT-0600 (CST)')
Now you can use various methods on the date to get the data you need:

date.toDateString() // "Thu Dec 29 2011"
date.toUTCString()  // "Fri, 30 Dec 2011 02:14:56 GMT"
date.getMonth()     // 11
date.getDate()      // 29
date.getFullYear()  // 2011


*/