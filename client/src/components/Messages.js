import React, { Component } from 'react';
import 'whatwg-fetch';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3002');

const Messages = () => {
    return (
        <div>
            Messages
        </div>
    )
}

export default Messages;