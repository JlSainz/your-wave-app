import React, { Component } from "react";
import AuthService from "./../services/Authservice";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      lastname: "",
      email: "",
      password: "",
      oculto: true
    };
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
      .then(user => {
        console.log(user);
        this.setState({
          username: "",
          lastname: "",
          email: "",
          password: ""
        });
        this.props.getUser(user.savedUser);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          username: username,
          lastname: lastname,
          email: email,
          password: password,
          error: true
        });
      });
  };

  componentDidMount() {
    let _this = this;
    setTimeout(function() {
      _this.setState({
        ...this.state,
        oculto: false
      });
    }, 10);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    if (this.state.oculto === true) {
      return (
        <div className="signup oculto">
          <form onSubmit={this.handleFormSubmit}>
            <h3>Create your account!</h3>
            <fieldset>
              <label>
                {" "}
                <i class="material-icons">perm_identity</i>
              </label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
                placeholder="Name"
                required
              />
            </fieldset>
            <fieldset>
              <label>
                <i class="material-icons">email</i>
              </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
                placeholder="Email"
                required
              />
            </fieldset>
            <fieldset>
              <label>
                <i class="material-icons">lock</i>
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
                placeholder="********"
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
    } else {
      return (
        <div className="signup oculto mostrar">
          <form onSubmit={this.handleFormSubmit}>
            <h3>Create your account!</h3>
            <fieldset>
              <label>
                {" "}
                <i class="material-icons">perm_identity</i>
              </label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
                placeholder="Name"
                required
              />
            </fieldset>
            <fieldset>
              <label>
                <i class="material-icons">email</i>
              </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
                placeholder="Email"
                required
              />
            </fieldset>
            <fieldset>
              <label>
                <i class="material-icons">lock</i>
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
                placeholder="********"
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
}

export default Signup;
