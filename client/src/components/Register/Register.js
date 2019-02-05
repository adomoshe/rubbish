import React from "react";
import { Link } from "react-router-dom";



const Register = () => {
    return (
        <div className="col-sm" >
            <div className="card">
                <div className="card-body">
                    <h3>Please Register</h3>
                    <br />
                    <form>
                        <label className="col-sm-3" htmlFor="inputUsername">First Name</label>
                        <input className="col-sm-4" name="firstName" type="text" placeholder="Enter First Name"></input>
                        <br />
                        <label className="col-sm-3" htmlFor="inputUsername">Last Name</label>
                        <input className="col-sm-4" name="lastName" type="text" placeholder="Enter Last Name"></input>
                        <br />
                        <label className="col-sm-3" htmlFor="inputUsername">Email &nbsp;</label>
                        <input className="col-sm-4" name="username" type="text" placeholder="Enter Email"></input>
                        <br />
                        <label className="col-sm-3" htmlFor="inputPassword">Password &nbsp;</label>
                        <input className="col-sm-4" name="password" type="password" placeholder="Enter Password"></input>
                        <label for="exampleFormControlSelect1">Example select</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </form>
                    <br />
                    <Link to="/login">Already a user?</Link>
                    <br />
                    <br />
                    <button type="submit" className="btn btn-info button-green" href="#">Submit</button>
                </div>
            </div>
        </div >
    )
}



export default Register;