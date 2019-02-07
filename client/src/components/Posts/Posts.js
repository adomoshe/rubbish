import React from 'react';
import "../Posts/posts.css";
// import ReactDOM from 'react-dom';
import oscar from "../Posts/oscar-prof_1.png";
import dummy from "../Posts/dummyphoto.png"
import bigoscar from "../Posts/bigoscar.png"
import mediumoscar from "../Posts/anotheroscar.png"

class Post extends React.Component {
    state = {
        numChildren: 0
    }

    
    render() {
    // uh import all posts?


    var headline = "NEED TRASH HELP"
    // var img = 
    var description = "Looking for someone to help me take out the trash next week!"

    const contact = () => {
        // alert("needs to route to messages box between user and poster")
    }


    return ( 
        <div className="container">
        <div className="post-box">
            <h2 className="post-head">{headline}</h2>
            <img className="post-pic" width="75px" src={oscar} alt="oscar lol"></img>
            <p className="post-descr">{description}</p>
            <button onClick = {contact} className="contact-btn">CONTACT</button> 
        </div>

        <div className="post-box">
            <h2 className="post-head">02/12 GARBAGE HELP</h2>
            <img className="post-pic" width="75px" src={bigoscar} alt="oscar lol"></img>
            <p className="post-descr">Looking for someone to help bring my garbage bins into the backyard after 5pm.</p>
            <button onClick = {contact} className="contact-btn">CONTACT</button> 
        </div>

        <div className="post-box">
            <h2 className="post-head">TRASH BINS FOR 3 WEEKS</h2>
            <img className="post-pic" width="75px" src={dummy} alt="oscar lol"></img>
            <p className="post-descr">Will be on a business trip for 3 weeks in March. Please contact if you can help with some household duties!</p>
            <button onClick = {contact} className="contact-btn">CONTACT</button> 
        </div>

        <div className="post-box">
            <h2 className="post-head">TRASH HELP TOMORROW</h2>
            <img className="post-pic" width="75px" src={mediumoscar} alt="oscar lol"></img>
            <p className="post-descr">Broke my ankle :'( Need help with trash bins tomorrow night.</p>
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

