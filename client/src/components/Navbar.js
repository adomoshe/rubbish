import React from "react"

const Navbar = () => {
    return (
        <div className="row">
            <nav className="navbar navbar-light bg-light">
                <div className="col-md-2">
                    <a className="navbar-brand" href="/">RUBBISH</a>
                </div>
                <div className="col-md-2">
                    <a href="/profile">Profile</a>
                </div>
                <div className="col-md-2">
                    <a href="/wall">Wall</a>
                </div>
                <div className="col-md-2">
                    <a href="/notifications">Notifications</a>
                </div>
                <div className="col-md-2">
                    <a href="/messages">Messages</a>
                </div>
                <div className="col-md-2">
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar