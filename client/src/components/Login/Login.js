import React, { Component } from "react";
import "../Login/login.css"
import { Link } from "react-router-dom";

import API from '../../utils/API';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.typing = this.typing.bind(this);
        this.submit = this.submit.bind(this);
    }

    typing(e) {
        // Getting the value and name of the input which triggered the change
        let value = e.target.value;
        const name = e.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    }

    submit(e) {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        if (!this.state.firstname || !this.state.lastname) {
            alert('Fill out your first and last name please!');
        } else if (this.state.password.length < 6) {
            alert(
                `Choose a more secure password ${this.state.firstname} ${
                this.state.lastname
                }`
            );
        } else {
            API.saveTrashman({
                email: this.state.email,
                password: this.state.password
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            alert(`Hello ${this.state.firstname} ${this.state.lastname}`);
        }

        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="col-sm" >
                <div className="card">
                    <div className="card-body">
                        <h3 className="sign-in">SIGN IN</h3>
                        <br />
                        <form>
                            <label className="col-sm-3" htmlFor="inputUsername">
                                Login &nbsp;
                        </label>
                            <input className="col-sm-4"
                                name="username"
                                type="text"
                                placeholder="Enter Username"

                            />
                            <br />

                            <label className="col-sm-3" htmlFor="inputPassword">
                                Password &nbsp;
                        </label>
                            <input className="col-sm-4"
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                            />
                        </form>
                        <br />
                        <Link to="/register">
                            <p className="new-user">Not a user? Create new account.</p>
                        </Link>
                        <br />
                        <br />
                        <button type="submit" className="sub-btn" href="#">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}



export default Login;