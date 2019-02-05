import React from 'react';
import "../Posts/posts.css"
// import ReactDOM from 'react-dom';



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
        <div className="post-box">
            <h1 className="post-head">{headline}</h1>
            <p className="post-descr">{description}</p>
            <button onClick = {contact} className="contact-btn">CONTACT</button> 
        </div>
    )

    }
}


// ReactDOM.render(
//    <Post />, document.getElementById('wall')
// )

export default Post;










    // <span id="wall"></span>

