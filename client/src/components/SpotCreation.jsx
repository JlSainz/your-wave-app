import React, { Component } from "react";
import Create from "./create/Create";
import Spots from "./spots/Spots";
import SpotsService from "./services/SpotsService";
import SearchBar from "./navbar/Searchbar";
export default class SpotCreation extends Component {
  constructor() {
    super();
    this.state = {
      spots: []
    };
    this.spServices = new SpotsService();
  }

  componentDidMount() {
    this.spServices.allSpots().then(data => {
      this.setState({ ...this.state, spots: data.spots });
    });
  }

  createNewSpot(
    name,
    location,
    nearby,
    rating,
    text,
    wave_form,
    wave_direction,
    country,
    weather,
    period,
    break_type,
    level,
    desired_height,
    vibe,
    consistence,
    imageURL
  ) {
    this.spServices
      .createSpots(
        name,
        location,
        nearby,
        rating,
        text,
        wave_form,
        wave_direction,
        country,
        weather,
        period,
        break_type,
        level,
        desired_height,
        vibe,
        consistence,
        imageURL
      )

      .then(response => {
        this.setState({
          ...this.state,
          spots: response.allSpots
        });
      });
  }

  render() {
    return (
      <div>
        <Create
          createSpots={(
            name,
            location,
            nearby,
            rating,
            text,
            wave_form,
            wave_direction,
            country,
            weather,
            period,
            break_type,
            level,
            desired_height,
            vibe,
            consistence,
            imageURL
          ) =>
            this.createNewSpot(
              name,
              location,
              nearby,
              rating,
              text,
              wave_form,
              wave_direction,
              country,
              weather,
              period,
              break_type,
              level,
              desired_height,
              vibe,
              consistence,
              imageURL
            )
          }
        />
        <SearchBar className="search-bar" />

        <Spots spots={this.state.spots} />
      </div>
    );
  }
}
