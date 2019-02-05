import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  componentDidMount() {
    fetch('/api/trashman')
      .then(res => console.log('res is', res))
    //   .then(json => {
    //     console.log(`json response ${json}`);
    //   });
  }

  cardStyle = {
    width: '18rem'
  };

  render() {
    return (
      <div>
        <div className="card" style={this.cardStyle}>
          <img
            className="card-img-top"
            src="https://photos.gograph.com/thumbs/CSP/CSP657/cartoon-garbage-can-vector-stock_k22277118.jpg"
            alt="Trash"
          />
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Name: Oscar</li>
              <li className="list-group-item">Date of Birth: 1/1/2010</li>
              <li className="list-group-item">Address: 123 Dumpster Blvd.</li>
            </ul>
          </div>
          <Link to="/">
            <button type="submit" className="btn btn-primary">
              Logout
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
