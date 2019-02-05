require('dotenv').config();
const express = require('express');
const app = express();
// const path = require('path');
const mongoose = require('mongoose');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const passport = require('passport');
const routes = require('./routes');
app.use(routes);
const PORT = process.env.PORT || 3001;
// socket.on('connect', function(){console.log('connected')});
// socket.on('event', function(data){});
// socket.on('disconnect', function(){console.log('disconnected')});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('User Disconnected');
  });
  socket.on('example_message', msg => {
    console.log(`message: ${msg}`);
  });
});

io.listen(3002);

// if (process.env.NODE_ENV === 'development') {
//   app.get('/', function(req, res){
//   res.sendFile(__dirname + '/client/public/index.html');
// });
// }

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/rubbish';

mongoose.connect(MONGODB_URI);

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Start the API server
app.listen(PORT, () => {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
