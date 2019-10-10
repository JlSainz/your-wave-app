import "./App.css";
import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/services/Authservice";
import Spots from "./components/spots/Spots";
import Create from "./components/create/Create";
import Profile from "./components/Profile/Profile";

// import Gmaps from "./components/gmaps/Gmaps";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();

    this.fetchUser();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <div className="App">
            <header className="App-header">
              <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
            </header>
            <Link className="links" to="/create">
              Create spot!
            </Link>
            <Link className="links" to="/profile">
              Edit your profile
            </Link>
            <Switch>
              <Route exact path="/create" render={() => <Create />} />
              <Route exact path="/profile" render={() => <Profile  />} />
            </Switch>
            <Spots />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="App">
            <header className="App-header">
              <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
              <Switch>
                <Route
                  exact
                  path="/signup"
                  render={() => <Signup getUser={this.getUser} />}
                />
                <Route
                  exact
                  path="/login"
                  render={() => <Login getUser={this.getUser} />}
                />
              </Switch>
            </header>
            <Spots />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
