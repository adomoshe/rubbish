import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Profile from './components/Profile';
import Wall from './components/Wall';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>

        <Navbar />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/wall" component={Wall} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>

    </Router>
  );
}


export default App;
