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
                    <form action="/profile" method="POST">
                        <label className="col-sm-3" htmlFor="inputUsername">Login &nbsp;</label>
                        <input className="col-sm-4" name="username" type="text" placeholder="Enter Username" />
                        <br />
                  
                        <label className="col-sm-3" htmlFor="inputPassword">Password &nbsp;</label>
                        <input className="col-sm-4" name="password" type="password" placeholder="Enter Password" />
                        <input type="submit" value="Submit" className="btn btn-info button-green" />
                    </form>
                    <br />
                    <Link to="/register"> <p className="new-user">Not a user? Create new account.</p></Link>
                    <br />
                    <br />
<<<<<<< HEAD
=======
                    <button type="submit" className="sub-btn" href="#">Submit</button>
>>>>>>> 125f8c821f4e9666dc504a04c657bfda2f569de7
                </div>
            </div>
        </div >
    )
}
}



export default Login;