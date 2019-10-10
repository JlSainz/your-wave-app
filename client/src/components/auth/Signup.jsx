import React, { Component } from "react";
import AuthService from "./../services/Authservice";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", lastname: "", email: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const lastname = this.state.lastname;
    const email = this.state.email;
    const password = this.state.password;
    this.service
      .signup(username, lastname, email, password)
      .then(response => {
        this.setState({
          username: "",
          lastname: "",
          email: "",
          password: ""
        });
        this.props.getUser(response.user);
      })
      .catch(error => {
        this.setState({
          username: username,
          lastname: lastname,
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
      <div className="signup">
        <form onSubmit={this.handleFormSubmit}>
          <h3>Create your account!</h3>
          <fieldset>
            <label className="label">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
              placeholder="Name..."
              required
            />
          </fieldset>
          <fieldset>
            <label className="label">Lastname</label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={e => this.handleChange(e)}
              placeholder="Last name..."
              required
            />
          </fieldset>
          <fieldset>
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
              placeholder="Email..."
              required
            />
          </fieldset>
          <fieldset>
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
              placeholder="Password..."
              required
            />
          </fieldset>
          <div className="fatherbtn">
            <input className="button" type="submit" value="Sign up" />
          </div>
        </form>
        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>
    );
  }
}

export default Signup;