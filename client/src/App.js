import "./App.css";
import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/services/Authservice";
import Spots from "./components/spots/Spots";
// import Create from "./components/create/Create";
import Profile from "./components/Profile/Profile";
import SpotCreation from "./components/SpotCreation";
import SpotsService from "./components/services/SpotsService";

// import Gmaps from "./components/gmaps/Gmaps";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, spots: [] };
    this.service = new AuthService();

    this.fetchUser();
    this.spServices = new SpotsService();
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

  componentDidMount() {
    this.spServices.allSpots().then(data => {
      this.setState({ ...this.state, spots: data.spots });
    });
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <Redirect to="/" />
          <Navbar
            className="App-header"
            loggedInUser={this.state.loggedInUser}
            logout={this.logout}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="App">
                  <Link className="links" to="/create">
                    Create spot!
                  </Link>
                  <Link className="links" to="/profile">
                    Your wave
                  </Link>
                  <Spots spots={this.state.spots} />
                  <Route exact path="/profile" render={() => <Profile />} />
                </div>
              )}
            />
            <Route
              exact
              path="/create"
              render={() => {
                return (
                  <React.Fragment>
                    <Link className="links" to="/profile">
                      Your wave
                    </Link>
                    <SpotCreation />
                  </React.Fragment>
                );
              }}
            />
            <Route
              exact
              path="/profile"
              render={() => {
                return (
                  <React.Fragment>
                    <Link className="links" to="/">
                      Home
                    </Link>
                    <Profile/>
                  </React.Fragment>
                );
              }}
            />
          </Switch>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="App">
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

            <Spots spots={this.state.spots} />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
