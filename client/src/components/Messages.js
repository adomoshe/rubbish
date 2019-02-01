import React, { Component } from 'react';
import 'whatwg-fetch';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3002');

class Messages extends Component {
  constructor(props) {
    super(props);
    this.sendSocketIO = this.sendSocketIO.bind(this);
  }

  sendSocketIO() {
    socket.emit('example_message', 'hello');
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="jumbotron">
          <h1 className="display-4">Send Message</h1>
          <textarea
            id="message"
            className="form-control"
            placeholder="Your Message Here"
          />
          <br />
          <button onClick={this.sendSocketIO} id="send" className="btn btn-success">
            Send
          </button>
        </div>
        <div id="messages" />
      </div>
    );
  }
}

export default Messages;
