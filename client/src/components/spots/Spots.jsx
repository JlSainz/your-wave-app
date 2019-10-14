import React, { Component } from "react";
// import SpotsService from "./../services/SpotsService";
import "./Spots.css";
import OneSpot from "./OneSpot";

export default class Spots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: []
    };
  }
  render() {
    return (
      <div className="container-spot">
        {this.props.spots.map((spot, index) => {
          return <OneSpot key={index} spot={spot} />;
        })}
      </div>
    );
  }
}
