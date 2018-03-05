const mongoose = require('mongoose');
const validator = require('validator');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	"userid"            : {"type" : mongoose.Schema.Types.ObjectId, ref: 'Details'},
	"text"			    : {"type" : String, "required" : true},
	"RetweetCount"      : {"type" : Number, "required" : true}
 
})

mongoose.model("Tweet",userSchema,"tweet");

