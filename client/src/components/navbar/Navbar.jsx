import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./../services/Authservice";
import SearchBar from "./Searchbar";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.props.loggedInUser) {
      return (
        <nav className="nav-bar">
          {/* <div className="img"> */}
          <img src="./images/logo.png" alt="logo" />
          {/* </div> */}
          <SearchBar className="search-bar" search={this.props.search} />
          <div className="container-navbar-logged">
            <Link to="/">HOME</Link> |
            <Link onClick={this.handleLogout}>LOG OUT</Link> |
            <Link to="/create">NEW SPOT</Link>| <br />
            <p>
              {this.props.loggedInUser
                ? this.props.loggedInUser.username
                : null}
            </p>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="nav-bar">
          <img src="./images/logo.png" alt="logo" />
          <SearchBar lassName="search-bar" search={this.props.search} />
          <div className="container-navbar">
            <Link to="/">HOME</Link> |<Link to="/signup">SIGN UP</Link>|
            <Link to="/login">LOG IN</Link>
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;
