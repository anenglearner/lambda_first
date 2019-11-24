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
  var tips=''
  const https = require('https');
  const req = https.request('https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&units=metric&lang=ja&appid=1f5c62ca52e1604754ae6e9f09e87ae2', (res) => {
      var body = ''
      res.on('data', (chunk) => {
          body+=chunk;
      });
      res.on('end', () => {
          res=JSON.parse(body);
          // console.log(`現在の東京の天気は${res.weather.base}です。`);
          // console.log(`現在の東京の天気は${res.weather[0].description}です。`);
          tips=dateTime.toString() + '\n現在の東京の天気は '+res.weather[0].description+ 'です。'

          // 自動投稿
        	twitter.post('statuses/update',{status: tips},(err,tweet,response)=>{
        		if(err){
        			return console.log(err)
        		}else{
        			return console.log(tweet)
        		}
        	})
      });
  })

  req.on('error', (e) => {
    console.error(`エラーが出ました： ${e.message}`);
  });

  req.end();
}
