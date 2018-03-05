module.exports = function(userDetails,r1,r2){
	userDetails.find({},(err,data)=>{
			if(err)
				throw err
			else{
				console.log(data)
				for(var i=0;i<data.length;i++){
					if(data[i].tweet[0].RetweetCount >= r1 && data[i].tweet[0].RetweetCount < r2){
						console.log("hello")
						console.log(data[i].tweet[0].text)
					}

				}
			}
		})
}