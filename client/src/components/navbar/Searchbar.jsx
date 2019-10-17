import React, { Component } from "react";
import "./Searchbar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="search-form" id="test">
          <input
            className="search"
            type="search"
            name="search"
            placeholder="Search spot..."
            onChange={e => this.props.search(e)}
          ></input>
          <i class="material-icons">search</i>
        </form>
      </div>
    );
  }
}
