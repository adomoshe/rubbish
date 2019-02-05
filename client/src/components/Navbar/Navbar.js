import React from "react";
import "../Navbar/navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-light bg-light">
                <div className="col-md-2">
                    <Link to="/" className="navbar-brand">RUBBISH</Link>
                </div>
                <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/wall">Wall</Link></li>
                    <li><Link to="/notifications">Notifications</Link></li>
                    <li><Link to="/messages">Messages</Link></li>
                    <li><Link to="/login" className="login-button">Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;