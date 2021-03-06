var express = require('express');
var port = process.env.PORT || 8382
var app = express();

var dotenv=require('dotenv');
dotenv.config();

var location= {
    "name": "nodeapi",
    "version": "1.0.0",
    "description": "making api for job profile template",
    "main": "index.js",
    "scripts": {
      "start": "node App.js",
      "dev": "nodemon App.js "
    },
    "keywords": [
      "node",
      "dev",
      "restapi"
    ],
    "author": "PRAGATI THAKUR",
    "license": "ISC",
    "dependencies": {
      "dotenv": "^16.0.1",
      "express": "^4.18.1"
    }
  }



// firsy default route
app.get('/',(req,res)=> {
    res.send("Hii from Express")
})

app.get('/location',(req,res)=> {
    res.send(location)
})

app.listen(port,()=> {
    console.log(`listening on port $(port)`)

})