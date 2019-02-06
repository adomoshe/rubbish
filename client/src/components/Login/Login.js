import React from "react";
import "../Login/login.css"
import { Link } from "react-router-dom";



class Login extends React.Component{
    render() {
    return (
        <div className="col-sm" >
            <div className="card">
                <div className="card-body">
                    <h3 className="sign-in">SIGN IN</h3>
                    <br />
                    <form>
                        <label className="col-sm-3" htmlFor="inputUsername">Login &nbsp;</label>
                        <input className="col-sm-4" name="username" type="text" placeholder="Enter Username"></input>
                        <br />
                  
                        <label className="col-sm-3" htmlFor="inputPassword">Password &nbsp;</label>
                        <input className="col-sm-4" name="password" type="password" placeholder="Enter Password"></input>
                    </form>
                    <br />
                    <Link to="/register">Not a user? Create new account.</Link>
                    <br />
                    <br />
                    <button type="submit" className="sub-btn" href="#">Submit</button>
                </div>
            </div>
        </div >
    )
}
}



export default Login;