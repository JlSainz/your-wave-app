import React, { Component } from "react";
import "./Preload.scss";
export default class Preload extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="lds-hourglass"></div>
      </React.Fragment>
    );
  }
}
