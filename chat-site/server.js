var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.port || 3000);
console.log('server is running....');


app.get('/', function(reg,res){
res.sendFile(__dirname + '/index.html');
});
