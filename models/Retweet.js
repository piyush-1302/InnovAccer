const mongoose = require('mongoose');
const validator = require('validator');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	"userid"            : {"type" : mongoose.Schema.Types.ObjectId, ref: 'Details'},
	"tweetid"            : {"type" : mongoose.Schema.Types.ObjectId, ref: 'Tweet'}
 
})

mongoose.model("Retweet",userSchema,"retweet");

