import React from "react";
import { Link } from "react-router-dom";

class Notification extends React.Component {
    render() {
    var notifcation = "you have 1 new message from Oscar"

    return ( 
        <Link to="/messages"><button >{notifcation}</button></Link>

    )

    }
}

export default Notification;