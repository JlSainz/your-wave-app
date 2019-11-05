import React, { Component } from "react";
import AuthService from "./../services/Authservice";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", oculto: true };
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
        <div className="container-login oculto-login">
          <form onSubmit={this.handleFormSubmit}>
            <h3>Sign in!</h3>
            <fieldset>
              <label>
                <i class="material-icons">email</i>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                  placeholder="Email"
                  required
                />
              </label>
            </fieldset>

            <fieldset>
              <label>
                <i class="material-icons">lock</i>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                  placeholder="********"
                  required
                />
              </label>
            </fieldset>
            <div className="fatherbtn">
              <input className="button" type="submit" value="Log in" />
            </div>
          </form>
          <h1>{this.state.error ? "Error" : ""}</h1>
        </div>
      );
    } else {
      return (
        <div className="container-login oculto-login mostrar-login ">
          <form onSubmit={this.handleFormSubmit}>
            <h3>Sign in!</h3>
            <fieldset>
              <label>
                <i class="material-icons">email</i>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                  placeholder="Email"
                  required
                />
              </label>
            </fieldset>

            <fieldset>
              <label>
                <i class="material-icons">lock</i>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                  placeholder="********"
                  required
                />
              </label>
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
}

export default Login;
