import React, { Component } from "react";
import { CoverageMap } from "istanbul-lib-coverage";

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
      <div className="spot" onClick={e => this.props.display(e)}>
        <img src={spot.imageURL} alt="spot pic" />
        <h1>
          {spot.name}({spot.country})
        </h1>
      </div>
    );
  }
}
