var express = require('express');
var port = process.env.PORT || 8382
var app = express();

// firsy default route
app.get('/',(req,res)=> {
    res.send("Hii from Express")
})

app.listen(port,()=> {
    console.log('listening on port $(port)')

})