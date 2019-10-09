import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AuthService from "./../services/Authservice";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    this.service
      .login(email, password)
      .then(response => {
        this.setState({
          email: email,
          password: password,
          error: false
        });

        this.props.getUser(response);
      })
      .catch(error => {
        this.setState({
          email: email,
          password: password,
          error: true
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container-login">
        <form onSubmit={this.handleFormSubmit}>
          <h3>Sign in!</h3>
          <fieldset>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
              placeholder="email..."
              required
            />
          </fieldset>

          <fieldset>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
              placeholder="Password"
              required
            />
          </fieldset>
          <div className="fatherbtn">
            <input className="button" type="submit" value="Log in" />
          </div>
        </form>

        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>
    );
  }
}

export default Login;
