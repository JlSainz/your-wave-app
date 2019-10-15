import React, { Component } from "react";
import "./Spots.css";
import Gmaps from "./../gmaps/Gmaps";
import OneSpot from "./OneSpot";
import SpotsService from "./../services/SpotsService";

export default class Spots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      selectedSpot: [],
      showOneSpot: false,
      forecast: {}
    };
    this.service = new SpotsService();
  }

  displayOne(spot) {
    this.setState({
      ...this.state,
      selectedSpot: spot,
      showOneSpot: true
    });
  }

  async getMeteo() {
    const forecast = await this.service.getForecast();
    // console.log(forecast);
    this.setState({
      ...this.state,
      forecast: forecast
    });
    // console.log("GETTING FORECAST...");
    // const lng = this.state.spot.location.coordinates[0];
    // const lat = this.state.spot.location.coordinates[1];
    // // const params = "swellHeight, waveHeight,seaLevel, windDirection, windSpeed";
    // // ("time,airTemperature,swellDirection, swellHeight, swellPeriod, waterTemperature, waveDirection, waveHeight, wavePeriod,seaLevel, windDirection, windSpeed");
    // console.log(process.env);
    // fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}`, {
    //   headers: {
    //     Authorization: `${process.env.REACT_APP_API_KEY}`
    //   }
    // })
    //   .then(response => response.json())
    //   .then(jsonData => {
    //     // Do something with response data.
    //     console.log(jsonData);
    //   });
  }

  render() {
    if (!!this.state.forecast.hours) {
      console.log(this.state.forecast.hours[0].airTemperature[0].value);
    }
    if (this.state.showOneSpot === false) {
      return (
        <div className="container-spot">
          <div className="one-spot">
            <div className="filter"></div>
            <div className="full-info"></div>
          </div>
          {this.props.spots.map((spot, index) => (
            <div onClick={() => this.displayOne(spot)}>
              <OneSpot
                full={false}
                selectedSpot={this.state.selectedSpot}
                key={index}
                spot={spot}
              />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="container-spot">
          <div className="one-spot display">
            <div className="filter"></div>
            <div className="full-info">
              <h1>Name: {this.state.selectedSpot.name}</h1>
              <p>Country: {this.state.selectedSpot.country}</p>
              <ul>
                <li>Nearby: {this.state.selectedSpot.nearby}</li>
                <li>Consistence: {this.state.selectedSpot.consistence}</li>
                <li>Commment: {this.state.selectedSpot.comment.text}</li>
                <li>Rating: {this.state.selectedSpot.comment.rating}</li>
                <li>Wave form: {this.state.selectedSpot.wave_form}</li>
                <li>
                  Wave direction: {this.state.selectedSpot.wave_direction}
                </li>
                <li>Weather: {this.state.selectedSpot.weather}</li>
                <li>Period: {this.state.selectedSpot.period}</li>
                <li>Break type: {this.state.selectedSpot.break_type}</li>
                <li>Level: {this.state.selectedSpot.level}</li>
                <li>Vibe: {this.state.selectedSpot.vibe}</li>
                <li>Lng: {this.state.selectedSpot.location.coordinates[0]}</li>
                <li>Lat: {this.state.selectedSpot.location.coordinates[1]}</li>
              </ul>
              <ul>
                {!!this.state.forecast.hours && (
                  <li>
                    Air: {this.state.forecast.hours[0].airTemperature[0].value}
                  </li>
                )}
              </ul>
              <Gmaps
                coordinates={this.state.selectedSpot.location.coordinates}
              />
              <button onClick={() => this.getMeteo()}>Get Forecast!</button>
            </div>
          </div>
          {this.props.spots.map((spot, index) => (
            <React.Fragment>
              <OneSpot key={index} spot={spot} />
            </React.Fragment>
          ))}
        </div>
      );
    }
  }
}
