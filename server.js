const http = require('http');
const express = require('express');
const app = express();
const socketServer = http.Server(app);
const socket = require('socket.io');
const io = socket(socketServer);
const ejs = require('ejs');

require('./sockets')(io);

const port = process.env.PORT || 8080;

app.use('/',express.static('public'));
app.set('view engine', 'ejs');

app.get('/enroll',(req,res)=> {
	res.render("enroll");
});

app.post('/enroll',(req,res)=>{
  const user = req.user ;
});


socketServer.listen(port , "0.0.0.0" , function(){
    console.log("Server is listening on port " + port ) ;
}) ;