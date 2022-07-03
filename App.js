var express = require('express');
var port = process.env.PORT || 8382
var app = express();

app.listen(port,()=> {
    console.log('listening on port $(port)')
})