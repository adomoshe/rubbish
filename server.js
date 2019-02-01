const express = require('express');
// const mongoose = require("mongoose");
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const http = require('http').Server(app);
const io = require('socket.io')(http);

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

io.listen(8000);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
}

app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, () => {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
