//index.js
var Twitter = require('twitter')
var twitter= new  Twitter({
  consumer_key:process.env['CONSUMER_KEY'],
  consumer_secret:process.env['CONSUMER_SECRET'],
  access_token_key:process.env['ACCESS_TOKEN_KEY'],
  access_token_secret:process.env['ACCESS_TOKEN_SECRET']
})

exports.handler=function(){
  var dateTime= new Date()
	var tips=dateTime.toString()

	//自動投稿
	twitter.post('statuses/update',{status: tips},(err,tweet,response)=>{
		if(err){
			return console.log(err)
		}else{
			return console.log(tweet)
		}
	})
}
