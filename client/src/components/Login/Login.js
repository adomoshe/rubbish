import React from 'react';
import '../Login/login.css';
import { Link } from 'react-router-dom';

import API from '../../utils/API';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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


  submit(e) {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert('Fill out your email and password please!');
    } else if (this.state.password.length < 6) {
      alert('Password is too short');
    } else {
      API.getTrashman({
        password: this.state.password,
        email: this.state.email
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      //   alert(`Hello ${this.state.firstname} ${this.state.lastname}`);
    }

    this.setState({
      password: '',
      email: ''
    });
  }

  render() {
    return (
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <h1 className="sign-in">SIGN IN</h1>
            <br />
            <form>
              <label className="col-sm-3" htmlFor="inputUsername">
                Email &nbsp;
              </label>
              <input
                value={this.state.email}
                className="col-sm-4"
                name="email"
                type="text"
                placeholder="oscar@egg.com"
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
                placeholder="¯\_(ツ)_/¯"
                onChange={this.typing}
              />
            </form>
            <br />
            <Link to="/register">
              {' '}
           <p className="new-user">Not a user? Create new account.</p>
            </Link>
            <br />
            <br />
            <button type="submit" className="sub-btn" onClick={this.submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
