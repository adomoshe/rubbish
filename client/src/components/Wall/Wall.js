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
      <form>
        <input
          // className="input-box"
          type="text"
          placeholder="What do you need help with?"
        />
        <br />
        <textarea
          // className="input-box"
          // type="textarea"
          placeholder="Write dates and details of job here!"
        />
        <br />
        <button>POST</button>
      </form>
    );

    return (
      <div className="container">
        <div>
          <Post />
        </div>
        <br />
        <br />
        <div>{newPost}</div>
      </div>
    );
  }
}

export default Wall;
