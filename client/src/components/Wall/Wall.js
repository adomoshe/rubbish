import React from 'react';
import '../Wall/wall.css';
import Post from '../Posts/Posts';

import API from '../../utils/API';

class Wall extends React.Component {
  componentDidMount() {
    API.getOwners()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  
  render() {
    var newPost = (
      <form className="whole-form">
            <br />
      <h1 className="sign-in">POST</h1>
        <textarea
          // className="input-box"
          className="wall-input-smol"
          placeholder="Need help? Write your headline here..."
        />
        <br />
        <textarea
        className="wall-input"
          // className="input-box"
          // type="textarea"
          placeholder="Write your description here! (dates, details, etc)..."
        />
        <br />

        <button className="sub-btn-two" onSubmit="#">POST</button>

      </form>
    )

    // pushPost() {

    // }


    return (
      <div className="container">
                <div className="row">
                <div className="col-md-6" ><Post /></div>
        <br />
        <br />
        <div className="col-md-6" >{newPost}</div>
                  </div>
      </div>
    );
  }
}

export default Wall;
