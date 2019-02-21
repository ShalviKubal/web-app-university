
var express = require("express");
var http=require('http');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.get('/getAccounts', function(req,res){
    console.log("Getting accounts");
    res.send({
        status: "ok"
    })
});
app.post('/login', function(req, res){  
    console.log("Login called");
    var data = req.body;
    console.log(req.body)
    res.send({
        message : "login done"
    })
});
var port= 5555;

var server = app.listen( port, function () {
    console.log('Server up: http://localhost:'+server.address().port);
});