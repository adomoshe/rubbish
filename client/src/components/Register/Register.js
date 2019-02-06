import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Register/register.css"

<<<<<<< HEAD
const Register = () => {
    return (
        <div className="col-sm" >
            <div className="card">
                <div className="card-body">
                    <h3>Please Register</h3>
                    <br />
                    <form action="/api/homeowner" method="POST">
                        <label className="col-sm-3" htmlFor="inputUsername">First Name</label>
                        <input className="col-sm-4" name="firstName" type="text" placeholder="Enter First Name" />
                        <br />
                        <label className="col-sm-3" htmlFor="inputUsername">Last Name</label>
                        <input className="col-sm-4" name="lastName" type="text" placeholder="Enter Last Name" />
                        <br />
                        <label className="col-sm-3" htmlFor="inputUsername">Email &nbsp;</label>
                        <input className="col-sm-4" name="username" type="text" placeholder="Enter Email" />
                        <br />
                        <label className="col-sm-3" htmlFor="inputPassword">Password &nbsp;</label>
                        <input className="col-sm-4" name="password" type="password" placeholder="Enter Password" />
                        <br />
                        <label className="col-sm-3" htmlFor="exampleFormControlSelect1">Select One</label>
                        <select className="col-sm-4 option" id="exampleFormControlSelect1">
                            <option>Homeowner</option>
                            <option>Trashman</option>
                        </select>
                        <input type="submit" value="Submit" className="btn btn-info button-green" />
                    </form>
                    <br />
                    <Link to="/login">Already a user?</Link>
                    <br />
                    <br />
                </div>
            </div>
        </div >
    )
}
=======
import API from '../../utils/API';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      email: ''
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
>>>>>>> 125f8c821f4e9666dc504a04c657bfda2f569de7

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
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        password: this.state.password,
        email: this.state.email
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      alert(`Hello ${this.state.firstname} ${this.state.lastname}`);
    }

    this.setState({
      firstname: '',
      lastname: '',
      password: '',
      email: ''
    });
  }

  render() {
    return (
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <h3>Please Register</h3>
            <br />
            <form>
              <label className="col-sm-3" htmlFor="inputUsername">
                First Name
              </label>
              <input
                value={this.state.firstname}
                className="col-sm-4"
                name="firstname"
                type="text"
                placeholder="Enter First Name"
                onChange={this.typing}
              />
              <br />
              <label className="col-sm-3" htmlFor="inputUsername">
                Last Name
              </label>
              <input
                value={this.state.lastname}
                className="col-sm-4"
                name="lastname"
                type="text"
                placeholder="Enter Last Name"
                onChange={this.typing}
              />
              <br />
              <label className="col-sm-3" htmlFor="inputUsername">
                Email &nbsp;
              </label>
              <input
                value={this.state.email}
                className="col-sm-4"
                name="email"
                type="text"
                placeholder="Enter Email"
                onChange={this.typing}
              />
              <br />
              <label className="col-sm-3" htmlFor="inputPassword">
                Password &nbsp;
              </label>
              <input
                value={this.state.password}
                className="col-sm-4"
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={this.typing}
              />
            </form>
            <br />
            <Link to="/login">Already a user?</Link>
            <br />
            <br />
            <button className="btn btn-info button-green" onClick={this.submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
