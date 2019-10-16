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

  // hideOne(spot) {
  //   this.setState({
  //     ...this.state,
  //     selectedSpot: spot,
  //     showOneSpot: false
  //   });
  // }

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
              <div className="spot-info">
                <ul>
                  <li>
                    {this.state.selectedSpot.name}(
                    {this.state.selectedSpot.country})
                  </li>
                  <li>{this.state.selectedSpot.nearby} near</li>
                  <li>Consistence: {this.state.selectedSpot.consistence}</li>
                  <li>Commment: {this.state.selectedSpot.comment.text}</li>
                  <li>Rating: {this.state.selectedSpot.comment.rating}</li>
                  <li>Wave form: {this.state.selectedSpot.wave_form}</li>
                  <li>{this.state.selectedSpot.wave_direction}</li>
                  <li>{this.state.selectedSpot.weather} weather</li>
                  <li>Period: {this.state.selectedSpot.period} s</li>
                  <li>{this.state.selectedSpot.break_type}</li>
                  <li>{this.state.selectedSpot.level} level</li>
                  <li> {this.state.selectedSpot.vibe} vibe</li>
                </ul>
                <Gmaps
                  className="map"
                  coordinates={this.state.selectedSpot.location.coordinates}
                />
              </div>
              <div className="forecast-info">
                <div className="Morning">
                  Morning 05-11h
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Air Temperature: 
                        
                        {this.state.forecast.hours[4].airTemperature[0].value} -
                        {this.state.forecast.hours[12].airTemperature[0].value}
                        ºC
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wave Direction:
                        {this.state.forecast.hours[4].waveDirection[0].value} -
                        {this.state.forecast.hours[12].waveDirection[0].value}º
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wave Height:
                        {this.state.forecast.hours[4].waveHeight[0].value} -
                        {this.state.forecast.hours[12].waveHeight[0].value} m
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wind Speed:
                        {this.state.forecast.hours[4].windSpeed[0].value} -
                        {this.state.forecast.hours[12].windSpeed[0].value} kph
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wind Direction:
                        {this.state.forecast.hours[4].windDirection[0].value} -
                        {this.state.forecast.hours[12].windDirection[0].value}º
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Period:
                        {this.state.forecast.hours[4].wavePeriod[0].value} -
                        {this.state.forecast.hours[12].wavePeriod[0].value} s
                      </li>
                    )}
                  </ul>
                </div>
                <div className="Midday">
                  Midday 11-17h
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Air Temperature:
                        {
                          this.state.forecast.hours[12].airTemperature[0].value
                        }{" "}
                        -{this.state.forecast.hours[18].airTemperature[0].value}
                        ºC
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wave Direction:
                        {this.state.forecast.hours[12].waveDirection[0].value} -
                        {this.state.forecast.hours[18].waveDirection[0].value}º
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wave Height:
                        {this.state.forecast.hours[12].waveHeight[0].value} -
                        {this.state.forecast.hours[18].waveHeight[0].value} m
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wind Speed:
                        {this.state.forecast.hours[12].windSpeed[0].value} -
                        {this.state.forecast.hours[18].windSpeed[0].value} kph
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wind Direction:
                        {this.state.forecast.hours[12].windDirection[0].value} -
                        {this.state.forecast.hours[18].windDirection[0].value}º
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Period:
                        {this.state.forecast.hours[12].wavePeriod[0].value} -
                        {this.state.forecast.hours[18].wavePeriod[0].value} s
                      </li>
                    )}
                  </ul>
                </div>
                <div className="Evening">
                  Evening 17-23h
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Air Temperature:
                        {
                          this.state.forecast.hours[18].airTemperature[0].value
                        }{" "}
                        -{this.state.forecast.hours[24].airTemperature[0].value}
                        ºC
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wave Direction:
                        {this.state.forecast.hours[18].waveDirection[0].value} -
                        {this.state.forecast.hours[24].waveDirection[0].value}º
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wave Height:
                        {this.state.forecast.hours[18].waveHeight[0].value} -
                        {this.state.forecast.hours[24].waveHeight[0].value} m
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wind Speed:
                        {this.state.forecast.hours[18].windSpeed[0].value} -
                        {this.state.forecast.hours[24].windSpeed[0].value} kph
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Wind Direction:
                        {this.state.forecast.hours[18].windDirection[0].value} -
                        {this.state.forecast.hours[24].windDirection[0].value}º
                      </li>
                    )}
                  </ul>
                  <ul>
                    {!!this.state.forecast.hours && (
                      <li>
                        Period:
                        {this.state.forecast.hours[18].wavePeriod[0].value} -
                        {this.state.forecast.hours[24].wavePeriod[0].value} s
                      </li>
                    )}
                  </ul>
                </div>
                <button onClick={() => this.getMeteo()}>Get Forecast!</button>
              </div>
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
