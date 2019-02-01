require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
// const mongoose = require("mongoose");
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const server = require('http').Server(app);
const io = require('socket.io')(server);
const socket = require('socket.io-client')('http://localhost');
// socket.on('connect', function(){console.log('connected')});
// socket.on('event', function(data){});
// socket.on('disconnect', function(){console.log('disconnected')});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('User Disconnected');
  });
  socket.on('example_message', msg => {
    console.log(`message: ${msg}`);
  });
});

// io.listen(3001);

// if (process.env.NODE_ENV === 'development') {
//   app.get('/', function(req, res){
//   res.sendFile(__dirname + '/client/public/index.html');
// });
// }

// if (process.env.NODE_ENV === 'production') {
//   app.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
//   });
// }

app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

server.listen(3002, function(){
  console.log('listening on *:3000');
});

// Start the API server
app.listen(PORT, () => {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
