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

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-bar">
          <div className="img">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <SearchBar className="search-bar" />
          <div className="container-navbar">
            <Link onClick={this.handleLogout}>LOG OUT</Link>|
            <img className="usuario" src="./images/usuario.svg" alt="logo" />
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="nav-bar">
          <img src="./images/logo.png" alt="logo" />
          <SearchBar className="search-bar" />
          <div className="container-navbar">
            <Link to="/signup">SIGN UP</Link>|<Link to="/login">SIGN IN</Link>
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;
