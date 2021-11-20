const express = require("express")
const app = express()
const twitterGetUrl = require("twitter-url-direct")
let respp=[];
var twUrl ="";

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  
  respp="";
  res.setHeader('Content-Type', 'application/json')

var query = require('url').parse(req.url,true).query;


	twUrl = String(query.url );
  if (twUrl.includes("twitter")){
    test(twUrl).then(Result=>{
var stringdata=JSON.stringify(respp);
	if (stringdata.includes(':[{"width":null,"height":null,"dimensions":null,"url":"/"}]}')){

    res.send("ERROR INVALID URL")
  }else{

    res.send(respp)
  }
    })
  }else{

    res.send("ERROR INVALID URL")
  }


})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));




async function test(twUrl){
    let response = await twitterGetUrl(twUrl)
    respp =response;

console.log(respp);
}




