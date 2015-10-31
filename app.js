
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var http = require('http');

//Setup
var app = express();
require('./routes/index')(app);

var port = process.env.PORT || 4005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

http.createServer(app)
.on("connection", function(){
	console.log("connection to  server established!");
})
.on("request", function(){
	console.log("new request made to server!");
})
.listen(port);

console.log("App is listening on port " + port);

