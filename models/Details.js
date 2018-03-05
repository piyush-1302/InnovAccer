const mongoose = require('mongoose');
const validator = require('validator');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	"name" 				: {"type" : String, "required" : true},
	"screenName"		: {"type" : String, "required" : true},
	"location" 			: {"type" : String, "required" : true},
	"followersCount"    : {"type" : Number, "required" : true},
	"friendsCount" 		: {"type" : Number, "required" : true},
	"listedCount" 		: {"type" : Number, "required" : true},
	"favouritesCount"   : {"type" : Number, "required" : true},
	"language" 			: {"type" : String, "required" : true},
	//"creationDate"		: {"type" : }
 
})

mongoose.model("Details",userSchema,"details");

