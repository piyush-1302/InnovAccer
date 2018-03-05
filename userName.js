module.exports = function(userDetails,name){
	userDetails.find({}).exec((err,data)=>{
		console.log("HELLO")
				if(err)
					throw err
				else{

					for(var i=0;i<data.length;i++){
						if(data[i].name.indexOf(name)!=-1){
							console.log(data[i]);
						}	
				}
			}
		})
}