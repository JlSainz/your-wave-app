import React, { Component } from "react";


export default class OneSpot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spot: {}
    };
  }

  static getDerivedStateFromProps(props, state) {
    state.spot = props.spot;
  }

  render() {
    const { spot } = this.state;
    return (
      <div className="spot">
        <img src={spot.imageURL} alt="spot pic" />
        <p>Country: {spot.country}</p>
      </div>
    );
  }
}
