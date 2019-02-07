import React from 'react';
import "../Posts/posts.css";
// import ReactDOM from 'react-dom';
import oscar from "../Posts/oscar-prof_1.png";



class Post extends React.Component {
    render() {
    // uh import all posts?


    var headline = "NEED TRASH HELP"
    // var img = 
    var description = "Looking for someone to help me take out the trash next week!"

    const contact = () => {
        alert("needs to route to messages box between user and poster")
    }


    return ( 
        <div className="container">
        <div className="post-box">
            <h2 className="post-head">{headline}</h2>
            <img className="post-pic" width="75px" src={oscar} alt="oscar lol"></img>
            <p className="post-descr">{description}</p>
            <button onClick = {contact} className="contact-btn">CONTACT</button> 
        </div>
        </div>
    )

    }
}


// ReactDOM.render(
//    <Post />, document.getElementById('wall')
// )

export default Post;










    // <span id="wall"></span>

