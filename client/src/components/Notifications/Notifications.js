import React from "react";
import "../Notifications/notifications.css"
import { Link } from "react-router-dom";
import oscar from "../Notifications/oscar-prof_1.png"
import dummy from "../Notifications/dummyphoto.png"

class Notification extends React.Component {


    render() {
        var notifcation = "You have 1 new message from Oscar"
        var notifcationDummy = "You have __ new message(s) from _____"

        var notifDummyTwo = "_____ has taken out your trash"


        return (
            <div className="container cont-notif ">


                <div className="notif-container ">


                    <img className="hey-oscar" width="75px" src={oscar} alt="oscar again!"></img>


                    <Link to="/messages">
                        <button className="  unread">{notifcation}</button>
                    </Link>
                </div>

                <hr />
                <div className="notif-container not-b">


                    <img className="hey-oscar" width="75px" src={dummy} alt="oscar again!"></img>


          
                        <button className=" notification">{notifcationDummy}</button>
       
                </div>

                <hr />
                <div className="notif-container">


                    <img className="hey-oscar" width="75px" src={dummy} alt="oscar again!"></img>


     
                        <button className=" notification">{notifcationDummy}</button>
            
                </div>

                <hr />
                <div className="notif-container not-b">


                    <img className="hey-oscar" width="75px" src={dummy} alt="oscar again!"></img>


       
                        <button className=" notification">{notifDummyTwo}</button>
               
                </div>

                <hr />
                <div className="notif-container">


                    <img className="hey-oscar" width="75px" src={dummy} alt="oscar again!"></img>


             
                        <button className=" notification">{notifcationDummy}</button>
                   
                </div>
            </div>
        )

    }
}

export default Notification;