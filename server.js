require('dotenv').config()
const express = require('express');
const app = express();
const router = require('express').Router();
const path = require('path');
// const mongoose = require("mongoose");
const routes = require('./routes');
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

if (process.env.NODE_ENV === 'production') {
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, () => {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
