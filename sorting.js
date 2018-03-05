module.exports = function(userDetails,arg){
	userDetails.find({},(err,data)=>{
			if(err)
				throw err
			else{

			}
		}).sort({"creationDate":1}).exec((err,data)=>{
			for(var i=0;i<data.length;i++){
					var date = new Date(data[i].creationDate)
					date = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
					if(date == arg){
						console.log(data[i].tweet[0].text)
					}
				}
		})
}