const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var datetime = require('node-datetime');
const twit = require('twitter');
const request = require('request')
const app = express();
const port = process.env.PORT || 7000;
mongoose.connect(process.env.MONGOLAB_URI||"mongodb://pk1302:kr1302@ds137246.mlab.com:37246/innovaccer");



app.listen(port,function(err){
	if(err)
		console.log(err);
	else
		console.log("Server is up at " + port);
});