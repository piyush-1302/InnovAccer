const mongoose = require('mongoose');
const validator = require('validator');
require("./Tweet")
var Tweet = mongoose.model("Tweet");
var Schema = mongoose.Schema;


var userSchema1 = new Schema({
	//"userid"            : {"type" : mongoose.Schema.Types.ObjectId, ref: 'Details'},
	"text"			    : {"type" : String, "required" : true},
	"RetweetCount"      : {"type" : Number, "required" : true}
 
})


var userSchema = new Schema({
	"name" 				: {"type" : String, "required" : true},
	"screenName"		: {"type" : String, "required" : true},
	"location" 			: {"type" : String, "required" : false},
	"followersCount"    : {"type" : Number, "required" : true},
	"friendsCount" 		: {"type" : Number, "required" : true},
	"listedCount" 		: {"type" : Number, "required" : true},
	"favouritesCount"   : {"type" : Number, "required" : true},
	"language" 			: {"type" : String, "required" : true},
	"creationDate"		: {"type" : Date,"required":true},
	"tweet"				: [userSchema1]
 
})



mongoose.model("Details",userSchema,"details");

