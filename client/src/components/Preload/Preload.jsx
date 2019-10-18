import React, { Component } from "react";
import "./Preload.scss";
export default class Preload extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <img
          src="https://miro.medium.com/max/978/0*cWpsf9D3g346Va20.gif "
          alt="loading"
        /> */}
        <div class="lds-hourglass"></div>
      </React.Fragment>
    );
  }
}
