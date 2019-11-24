//require
const lambda = require('./index.js');

//とりあつ空っぽで（設定も可能）
const event = "";
const context = "";

//callackの定義
function callback(error, result){

    //まあ、書かなくても大丈夫
    if(typeof error !== 'null'){
        console.error(result);
        process.exit(1);
    }
    //出力（ここがメイン）
    console.log(result);
    process.exit(0);
}

//呼び出し
lambda.handler(event, context, callback);
