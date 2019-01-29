
import React from "react";
// import "./wall.css";

const Wall = (props) => (<div className="wall-posts">
    {props.wallPost.map(item => (<li className="post-item" key={item.id}>
        {item.name}
    </li>))}
</div>)


export default Wall;