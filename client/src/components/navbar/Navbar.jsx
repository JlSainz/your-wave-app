import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/Authservice";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li>
              <Link onClick={this.handleLogout}>Logout</Link>
            </li>
          </ul>

          <div className="header">
            <h2>Welcome {this.state.loggedInUser.username}</h2>
          </div>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-bar">
            <img src="./images/logo.png" alt="logo" />
            <form className="search-bar" action="action_page.php">
              <input type="text" placeholder="Search..." name="search" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
            <Link to="/signup">Signup</Link>|<Link to="/login">Login</Link>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
