import React from "react";
import "../Notifications/notifications.css"
import { Link } from "react-router-dom";

class Notification extends React.Component {
    render() {
    var notifcation = "You have 1 new message from Oscar"

    return ( 
        <Link to="/messages"><button className="notification">{notifcation}</button></Link>

    )

    }
}

export default Notification;