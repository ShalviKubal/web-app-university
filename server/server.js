
var express = require("express");
var http=require('http');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/getAccounts', function(req,res){
    console.log("Getting accounts");
    res.send({
        status: "ok"
    })
});
app.post('/addaccounts', function(req, res){  
    console.log("Add accounts ..");
    var data = req.body;
    console.log(req.body)
    res.send({
        message : "accounts added."
    })
});
var port= 5555;

var server = app.listen( port, function () {
    console.log('Server up: http://localhost:'+server.address().port);
});