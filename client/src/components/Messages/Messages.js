import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import "../Messages/messages.css"
import oscar from "../Messages/oscar-prof_1.png"
const socket = openSocket('http://localhost:3002');

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.buildMessage = this.buildMessage.bind(this);
  }

  buildMessage(e) {
    const name = e.target.name;
    const input = e.target.value;
    this.setState({
      [name]: input
    });
  }

  sendMessage() {
    socket.emit('example_message', this.state.message);
    this.setState({
        message: ''
    })
  }

  render() {
    return (
      <div className="container ">

      <div className="fake-convo">
        <div className="fake-convo-head">
          <img width="75px" className="dummy-thumb" src={oscar} alt="Hey Oscar!">
          </img>
          <p>Oscar</p>

        </div>
        <div className="oscar-talk speech-bub user-a">
            Hi! I saw your post and would love to help you take out your trash bins next weekend.
        </div>

        <div class="gerald-talk speech-bub ">
            That would be great! What time works best for you on Wednesday?
        </div>

        <div className="oscar-talk speech-bub ">
            I can either do it in the morning before 11am or anytime after 6pm.
        </div>

        <div className="gerald-talk speech-bub ">
            How's 6:30?
        </div>

      </div>




      
        <br />
        <div className="wrap-div">
          <h1 className="head">Message</h1>
          <textarea
            name="message"
            type="text"
            id="message"
            className="form-control big-text"
            placeholder="I am groot..."
            onChange={this.buildMessage}
            value={this.state.message}
          />
          <br />
          <button
            onClick={this.sendMessage}
            id="send"
            className="send-btn"
          >
            Send
          </button>
        </div>
        <div id="messages" />
      </div>
    );
  }
}

export default Messages;
