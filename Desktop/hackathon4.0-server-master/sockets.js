var mongoose = require("mongoose");
require("./models/user");
require("./models/feedback");
require("./models/service");
require("./models/subservice")
require("./models/college")
require("./models/details")
var Details = mongoose.model("Details")
var Subservice = mongoose.model("Subservice")
var Service = mongoose.model("Service")
var User = mongoose.model("User");
var Feedback = mongoose.model("Feedback");
var College = mongoose.model("College")
var activeSocket = [];
var activeUser = [];

module.exports = function(io){
    io.sockets.on("connection",handleSockets);
    function handleSockets(socket){
        console.log("a socket connected")
        socket.on("emitUser",function(data){
            console.log("helllo")
            socket.userid = data.userid;
            activeSocket.push(socket);
            activeUser.push(socket.userid);
        });

        socket.on("getRating",function(data){
            console.log("helllllllo")
            var userid = data.userid;
            var json = {}
            Feedback.findOne({"userid":userid},function(err,feedback){
                if(err){
                    json.status = 500;
                    json.data = "internal server error"
                }else{
                    if(!feedback){
                        json.status = 200
                        json.data = "Unrated"
                    }else{
                        json.status = 200;
                        json.data = feedback.rating;
                    }
                }
                socket.emit("getRating ack",json)
            })
        });

        socket.on("extractServices",function(){
            console.log("hhhhhhhhhh")
            Service.find({},function(err,service){
                if(err){
                    callback(500,"Internal server error")
                }else{
                    callback(200,service)
                }
            })
        })

        socket.on("extractSubservice",function(data,callback){
            console.log(data)
            Subservice.find({"service":data},function(err,service){
                if(err){
                    callback(500,"Internal service error")
                }else{
                    callback(200,service)
                }
            })
        })

        socket.on("extractCollege",function(callback){
            College.find({},function(err,college){
                if(err){
                    callback(500,"Internal server error")
                }else{
                    callback(200,college)
                }
            })
        })

        socket.on("knumberDetail",function(data){
            var json = {}
            var knumber = data.knumber;
            Details.find({"kNumber" : knumber},function(err,fetchBill){
                if(err){
                    json.status = 500
                    json.response = "internal server error"
                }else{
                    json.status = 200;
                    json.response = fetchBill;
                    console.log('fetchbill');
                }
            })
            socket.emit("knumberDetail ack",json);
        })
    }
};
