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
        <input
          // className="input-box"
          className="wall-input-smol"
          type="text"
          placeholder="What do you need help with?"
        />
        <br />
        <textarea
        className="wall-input"
          // className="input-box"
          // type="textarea"
          placeholder="       Write dates and details of job here!"
        />
        <br />

        <button className="sub-btn-two" onSubmit="#">POST</button>

      </form>
    )

    // pushPost() {
      
    // }


    return (
      <div className="container">
        <div ><Post /></div>
        <br />
        <br />
        <div>{newPost}</div>
      </div>
    );
  }
}

export default Wall;
