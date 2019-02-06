
import React from "react";
import "../Wall/wall.css"
import Post from '../Posts/Posts';




class Wall extends React.Component {

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
        <button onSubmit="#">POST</button>

      </form>
    )


    return (
      <div className="container">
        <div><Post /></div>
        <br />
        <br />
        <div>{newPost}</div>
      </div>
    )
  }
}

export default Wall;


