module.exports = function(userDetails,tweet){
	userDetails.find({}).sort({"creationDate":1}).exec((err,data)=>{
				if(err)
					throw err
				else{
					for(var i=0;i<data.length;i++){
						if(data[i].tweet[0].text.indexOf(tweet)!=-1){
							console.log(data[i].tweet[0].text);
						}	
				}
			}
		})
}