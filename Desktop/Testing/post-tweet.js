console.log("Example is up now..")
var Twit = require('twit');
var app = require('express')();
var bodyparser=require('body-parser');
const path = require('path');
var config = require('./config')
var T = new Twit(config);
var tweet = { 
status: 'hello world!!' }

T.post('statuses/update', tweet, tweeted)

 function tweeted(err, data, response) {
  if(err){
console.log("Something went wrong!");
}
else{
console.log("Voila It worked!");
}
}


app.listen(3000,(err)=>{
	if(!err)
		console.log("server running");
});
