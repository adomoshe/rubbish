import React, { Component } from 'react';
import "../Profile/profile.css"
import { Link } from 'react-router-dom';
import oscar from "../Profile/oscar-prof_1.png"

import API from '../../utils/API';

class Profile extends Component {
  componentDidMount() {
    API.getTrashmen()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div>
          <div className="prof-card">
        <div className="card " >
          <div className="card-body">
          <img width="170px;"
            className="oscar-again"
            src={oscar}
            alt="its oscar again"
          />
            <ul className="oscar">
              <li className="osc-stuff">Name: Oscar</li>
              <li className="osc-stuff">Date of Birth: 1/1/2010</li>
              <li className="osc-stuff">Address: 123 Dumpster Blvd.</li>
            </ul>
          </div>
          <Link to="/">
            <button type="submit" className="sub-btn prof-btn">
              Logout
            </button>
          </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default Profile;
