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
<<<<<<< HEAD
      <form>
        <input
          // className="input-box"
=======
      <form className="whole-form">
        <input
          // className="input-box"
          className="wall-input-smol"
>>>>>>> 125f8c821f4e9666dc504a04c657bfda2f569de7
          type="text"
          placeholder="What do you need help with?"
        />
        <br />
        <textarea
<<<<<<< HEAD
=======
        className="wall-input"
>>>>>>> 125f8c821f4e9666dc504a04c657bfda2f569de7
          // className="input-box"
          // type="textarea"
          placeholder="       Write dates and details of job here!"
        />
        <br />
<<<<<<< HEAD
        <button onSubmit="#">POST</button>
=======

        <button className="sub-btn-two" onSubmit="#">POST</button>
>>>>>>> 125f8c821f4e9666dc504a04c657bfda2f569de7

      </form>
    )

    // pushPost() {
      
    // }


    return (
      <div className="container">
<<<<<<< HEAD
        <div><Post /></div>
=======
        <div ><Post /></div>
>>>>>>> 125f8c821f4e9666dc504a04c657bfda2f569de7
        <br />
        <br />
        <div>{newPost}</div>
      </div>
    );
  }
}

export default Wall;
