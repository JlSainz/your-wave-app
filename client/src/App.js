import "./App.css";
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/services/Authservice";
import Spots from "./components/spots/Spots";
// import Create from "./components/create/Create";
import Profile from "./components/Profile/Profile";
import SpotCreation from "./components/SpotCreation";
import SpotsService from "./components/services/SpotsService";
import Searchbar from "./components/navbar/Searchbar";

// import Gmaps from "./components/gmaps/Gmaps";

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
          {/* <Redirect to="/" /> */}
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
                  <Spots spots={this.state.filtered} />
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
                    <SpotCreation getAllSpotsFn={cb => this.getAllSpots(cb)} />
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
                    <Profile />
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
                path="/signup"
                render={() => <Signup getUser={this.getUser} />}
              />
              <Route
                exact
                path="/login"
                render={() => <Login getUser={this.getUser} />}
              />
            </Switch>
            <Spots spots={this.state.filtered} />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default withRouter(App);
