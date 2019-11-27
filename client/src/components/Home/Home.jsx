import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
// import Spots from "../spots/Spots";

export default class Home extends Component {
  render() {
    return (
      <div className="all">
        <div className="image">
          <h1>Discover The World Through Surfing</h1>
          <img src="/images/home.jpg" alt="home" />
        </div>
        <div className="resume">
          <p>
            {" "}
            " Your waves it's born by the need of an open page that can show
          </p>
          <p>
            the few important things to need to know about a specific surfing
          </p>
          <p>spot... Also it provides you the surf forecast of the day.</p>
          <p>Everybody can check the info of the spots, and if you sign up</p>
          <p> you can make your own post! Just to make it easier to make the</p>
          <p>difficult decission of where to surf... "</p>
          <p>Go try it!</p>
        </div>
        <div className="spots-display">
          <h2>Check people favourite spots !</h2>
          <img src="/images/spots.png" alt="spots" />

          <Link to="/spots">See all</Link>
        </div>
        <div className="surf-camp">
          <img src="/images/surf-camp.jpg" alt="camp" />
          <h2> Get Discounts of our favourites surfcamps !</h2>
          <button>
            <a href="https://surfivorcamp.com/contacts/">Contact</a>
          </button>
          <button>
            <a href="https://surfivorcamp.com/5-best-surf-camps-for-beginners/">
              More information
            </a>
          </button>
        </div>
        <div className="discover">
          <h2>Discover The World With Us</h2>
          <p>Stay tuned for our latest spots, surfcamps and much more...</p>
          <input type="text" placeholder="Email Address" required />
          <button> SIGN UP</button>
        </div>
      </div>
    );
  }
}
