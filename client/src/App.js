import "./App.css";
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/services/Authservice";
import Spots from "./components/spots/Spots";
// import Profile from "./components/Profile/Profile";
import SpotCreation from "./components/SpotCreation";
import SpotsService from "./components/services/SpotsService";
import Home from "./components/Home/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      spots: [],
      filtered: [],
      searchString: ""
    };
    this.service = new AuthService();

    this.fetchUser();
    this.spServices = new SpotsService();
  }

  getUser = userObj => {
    this.setState(
      {
        loggedInUser: userObj
      },
      () => this.props.history.push("/")
    );
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
    this.getAllSpots();
  }

  getAllSpots(cb) {
    this.spServices.allSpots().then(data => {
      this.setState(
        {
          ...this.state,
          spots: data.spots,
          filtered: data.spots
        },
        () => {
          if (cb) cb();
        }
      );
    });
  }

  searchSpots() {
    let search = this.state.searchString;
    let filteredSpots = this.state.spots.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({
      ...this.state,
      filtered: filteredSpots
    });
  }

  checkSearch(e) {
    this.setState(
      {
        ...this.state,
        searchString: e.target.value
      },
      () => this.searchSpots()
    );
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <Navbar
            className="App-header"
            loggedInUser={this.state.loggedInUser}
            logout={this.logout}
            search={e => this.checkSearch(e)}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="App">
                  <Home />
                </div>
              )}
            />
            <Route
              exact
              path="/spots"
              render={() => (
                <div className="App">
                  <Spots spots={this.state.filtered} />
                </div>
              )}
            />
            <Route
              exact
              path="/create"
              render={() => {
                return (
                  <React.Fragment>
                    <SpotCreation getAllSpotsFn={cb => this.getAllSpots(cb)} />
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
              search={e => this.checkSearch(e)}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div className="App">
                    <Home />
                  </div>
                )}
              />
              <Route
                exact
                path="/signup"
                render={() => (
                  <div className="App">
                    <Signup getUser={this.getUser} />
                    <Home />
                  </div>
                )}
              />
              <Route
                exact
                path="/login"
                render={() => (
                  <div className="App">
                    <Login getUser={this.getUser} />
                    <Home />
                  </div>
                )}
              />
              <Route
                exact
                path="/spots"
                render={() => <Spots spots={this.state.filtered} />}
              />
              <Route exact path="/" render={() => <Home />} />
            </Switch>
          </div>
          {/* <Spots spots={this.state.filtered} /> */}
        </React.Fragment>
      );
    }
  }
}

export default withRouter(App);
