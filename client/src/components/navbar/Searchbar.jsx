import React, { Component } from "react";
import "./Searchbar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="search-form" id="test">
          <input
            className="input"
            type="search"
            name="search"
            // onChange={e => this.props.search(e)}
          ></input>
        </form>
      </div>
    );
  }
}
