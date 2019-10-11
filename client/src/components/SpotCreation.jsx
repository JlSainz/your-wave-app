import React, { Component } from "react";
import Create from "./create/Create";
import Spots from "./spots/Spots";
import SpotsService from "./services/SpotsService";

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
    image,
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
    vibe,
    consistence
  ) {
    this.spServices
      .createSpots(
        name,
        location,
        image,
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
        vibe,
        consistence
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
        xxxxx
        <Create
          createSpots={(
            name,
            location,
            image,
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
            vibe,
            consistence
          ) =>
            this.createNewSpot(
              name,
              location,
              image,
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
              vibe,
              consistence
            )
          }
        />
        xxxxxx
        <Spots spots={this.state.spots} />
        xxxxx
      </div>
    );
  }
}
