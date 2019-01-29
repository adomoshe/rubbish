import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />
        <Login />

      </div>
    );
  }
}

export default App;
