import React from "react";
import "../Login/login.css"
import { Link } from "react-router-dom";



const Login = () => {
    return (
        <div className="col-sm" >
            <div className="card">
                <div className="card-body">
                    <h3>Please Sign In</h3>
                    <br />
                    <form action="/profile" method="POST">
                        <label className="col-sm-3" htmlFor="inputUsername">Login &nbsp;</label>
                        <input className="col-sm-4" name="username" type="text" placeholder="Enter Username" />
                        <br />
                        <label className="col-sm-3" htmlFor="inputPassword">Password &nbsp;</label>
                        <input className="col-sm-4" name="password" type="password" placeholder="Enter Password" />
                        <input type="submit" value="Submit" className="btn btn-info button-green" />
                    </form>
                    <br />
                    <Link to="/register">Not a user? Create new account.</Link>
                    <br />
                    <br />
                </div>
            </div>
        </div >
    )
}



export default Login;