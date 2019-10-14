import React, { Component } from "react";
import Gmaps from "./../gmaps/Gmaps";

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

  getMeteo = () => {
    console.log("GETTING FORECAST...");

    const lng = this.state.spot.location.coordinates[0];
    const lat = this.state.spot.location.coordinates[1];

    // const params = "swellHeight, waveHeight,seaLevel, windDirection, windSpeed";
    // ("time,airTemperature,swellDirection, swellHeight, swellPeriod, waterTemperature, waveDirection, waveHeight, wavePeriod,seaLevel, windDirection, windSpeed");

    fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}`, {
      headers: {
        Authorization:
          "807b335c-e8f5-11e9-80bf-0242ac130004-807b347e-e8f5-11e9-80bf-0242ac130004"
      }
    })
      .then(response => response.json())
      .then(jsonData => {
        // Do something with response data.
        console.log(jsonData);
      });
  };

  render() {
    const { spot } = this.state;
    return (
      <div className="spot">
        <h1>Name: {spot.name}</h1>
        <img src={spot.imageURL} alt="Photo" />
        <p>Country: {spot.country}</p>
        <ul>
          <li>Nearby: {spot.nearby}</li>
          <li>Consistence: {spot.consistence}</li>
          <li>Commment: {spot.comment.text}</li>
          <li>Rating: {spot.comment.rating}</li>
          <li>Wave form: {spot.wave_form}</li>
          <li>Wave direction: {spot.wave_direction}</li>
          <li>Weather: {spot.weather}</li>
          <li>Period: {spot.period}</li>
          <li>Break type: {spot.break_type}</li>
          <li>Level: {spot.level}</li>
          <li>Vibe: {spot.vibe}</li>
          <li>Lng: {spot.location.coordinates[0]}</li>
          <li>Lat: {spot.location.coordinates[1]}</li>
        </ul>
        <Gmaps coordinates={spot.location.coordinates} />
        <button onClick={this.getMeteo}>Get Forecast!</button>
      </div>
    );
  }
}
