import React from "react";
import { Link } from "react-router-dom";



const Login = () => {
    return (
        <div className="col-sm" >
            <div className="card">
                <div className="card-body">
                    <h3>Please Sign In</h3>
                    <form>
                        <label className="col-sm-3" for="inputUsername">Login &nbsp;</label>
                        <input className="col-sm-4" name="username" type="text" placeholder="Enter Username"></input>
                        <br />
                        <label className="col-sm-3" for="inputPassword">Password &nbsp;</label>
                        <input className="col-sm-4" name="password" type="password" placeholder="Enter Password"></input>
                    </form>
                    <br />
                    <a href="#">Forgot password?</a>
                    &nbsp; &nbsp;
                    <br />
                    <Link to="/register">Not a user? Create new account.</Link>
                    <br />
                    <button type="button" className="btn btn-info button-green" href="#">Submit</button>
                </div>
            </div>
        </div >
    )
}



export default Login;