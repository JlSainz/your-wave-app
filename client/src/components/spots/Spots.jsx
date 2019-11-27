import React, { Component } from "react";
import "./Spots.scss";
import Gmaps from "./../gmaps/Gmaps";
import OneSpot from "./OneSpot";
import SpotsService from "./../services/SpotsService";
import Preload from "../Preload/Preload";
import SearchBar from "../navbar/Searchbar";

export default class Spots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      selectedSpot: [],
      showOneSpot: false,
      forecast: {},
      preload: false
    };
    this.service = new SpotsService();
    this.preload();
  }

  displayOne(spot) {
    this.setState(
      {
        ...this.state,
        selectedSpot: spot,
        showOneSpot: true
      },
      () => this.getForecast(this.state.selectedSpot)
    );
  }

  preload() {
    setTimeout(() => {
      this.setState({ ...this.state, preload: true });
    }, 4000);
  }

  hideOne(spot) {
    this.setState({
      ...this.state,
      showOneSpot: false,
      preload: false
    });
  }

  getForecast(spot) {
    const lng = spot.location.coordinates[0];
    const lat = spot.location.coordinates[1];
    fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}`, {
      headers: {
        Authorization: `${process.env.REACT_APP_API_KEY}`
      }
    })
      .then(response => response.json())
      .then(forecast => {
        this.setState({
          ...this.state,
          forecast: forecast
        });
      });
  }

  render() {
    if (!this.state.preload) {
      this.preload();
    }
    if (this.state.forecast.hours) {
    }
    if (this.state.showOneSpot === false) {
      return (
        <div className="container-spot">
          <div className="one-spot">
            <div className="filter"></div>
            <div className="full-info"></div>
          </div>
          <div className="masonry-effect">
            {this.props.spots.map((spot, index) => (
              <div className="item" onClick={() => this.displayOne(spot)}>
                <OneSpot
                  full={false}
                  selectedSpot={this.state.selectedSpot}
                  key={index}
                  spot={spot}
                  display={() => this.getForecast(spot)}
                />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-spot">
          <div className="one-spot display">
            <div className="filter"></div>
            <div className="full-info">
              <div className="spot-info">
                <i
                  className="material-icons back-spot"
                  onClick={() => this.hideOne()}
                >
                  arrow_back
                </i>
                <ul>
                  <li className="center">
                    {this.state.selectedSpot.name} (
                    {this.state.selectedSpot.country})
                  </li>
                </ul>
                <img src={this.state.selectedSpot.imageURL} alt="spot-photo" />
                <h2>Spot info</h2>
                <div className="topRow">
                  <span>
                    {" "}
                    {this.state.selectedSpot.nearby} Nearby{" "}
                    <i class="fas fa-utensils"></i>{" "}
                  </span>

                  <span>
                    {this.state.selectedSpot.consistence}{" "}
                    <i class="fas fa-check"></i>
                  </span>

                  <span>
                    {" "}
                    {this.state.selectedSpot.comment.rating}
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div className="sRow">
                  <span>
                    {this.state.selectedSpot.wave_form}
                    <i class="fas fa-wind"></i>
                  </span>

                  <span>
                    {" "}
                    {this.state.selectedSpot.wave_direction}{" "}
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </span>

                  <span>
                    {this.state.selectedSpot.weather} <i class="fas fa-sun"></i>
                  </span>
                </div>
                <div className="bRow">
                  <span>
                    {" "}
                    {this.state.selectedSpot.break_type}{" "}
                    <i class="fas fa-water"></i>
                  </span>

                  <span>
                    {this.state.selectedSpot.level}{" "}
                    <i class="fas fa-exclamation"></i>
                  </span>

                  <span>
                    {this.state.selectedSpot.vibe}{" "}
                    <i class="fas fa-hand-spock"></i>
                  </span>
                </div>
                <div className="putoMap">
                  <Gmaps
                    className="Gmaps"
                    coordinates={this.state.selectedSpot.location.coordinates}
                  />
                </div>
                <div className="comment">
                  <h3>"{this.state.selectedSpot.comment.text}"</h3>
                  <p>Posted by: "Anonymous"</p>
                </div>
              </div>
              <span className="for">
                <h2>Today's forecast</h2>
              </span>
              <div className="forecast-info">
                <div className="Morning">
                  {this.state.preload ? (
                    <React.Fragment>
                      <div className="upRow">
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons">brightness_7</i>
                              {this.state.forecast.hours[4].airTemperature[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[12].airTemperature[0].value.toFixed()}
                              ºC
                            </li>
                          )}
                        </ul>
                        <p>Morning 05 - 11h</p>
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons">opacity</i>
                              {this.state.forecast.hours[4].waterTemperature[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[12].waterTemperature[0].value.toFixed()}
                              ºC
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="midRow">
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="fas fa-water"></i>{" "}
                              {this.state.forecast.hours[4].waveHeight[0].value.toFixed(
                                1
                              )}{" "}
                              -{" "}
                              {this.state.forecast.hours[12].waveHeight[0].value.toFixed(
                                1
                              )}{" "}
                              m
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="downRow">
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons"> autorenew</i>
                              {this.state.forecast.hours[4].wavePeriod[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[12].wavePeriod[0].value.toFixed()}{" "}
                              s
                            </li>
                          )}
                        </ul>
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons"> arrow_upward</i>
                              {this.state.forecast.hours[4].windSpeed[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[12].windSpeed[0].value.toFixed()}{" "}
                              kph
                            </li>
                          )}
                        </ul>
                      </div>
                    </React.Fragment>
                  ) : (
                    <Preload />
                  )}
                </div>
                <div className="Midday">
                  {this.state.preload ? (
                    <React.Fragment>
                      <div className="upRow">
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons">brightness_7</i>
                              {this.state.forecast.hours[12].airTemperature[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[18].airTemperature[0].value.toFixed()}
                              ºC
                            </li>
                          )}
                        </ul>

                        <p>Midday 11 - 17h</p>

                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons">opacity</i>
                              {this.state.forecast.hours[12].waterTemperature[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[18].waterTemperature[0].value.toFixed()}
                              ºC
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="midRow">
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="fas fa-water"></i>{" "}
                              {this.state.forecast.hours[12].waveHeight[0].value.toFixed(
                                1
                              )}{" "}
                              -{" "}
                              {this.state.forecast.hours[18].waveHeight[0].value.toFixed(
                                1
                              )}{" "}
                              m
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="downRow">
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons"> autorenew</i>
                              {this.state.forecast.hours[12].wavePeriod[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[18].wavePeriod[0].value.toFixed()}{" "}
                              s
                            </li>
                          )}
                        </ul>
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons"> arrow_upward</i>
                              {this.state.forecast.hours[12].windSpeed[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[18].windSpeed[0].value.toFixed()}{" "}
                              kph
                            </li>
                          )}
                        </ul>
                      </div>
                    </React.Fragment>
                  ) : (
                    <Preload />
                  )}
                </div>
                <div className="Evening">
                  {this.state.preload ? (
                    <React.Fragment>
                      <div className="upRow">
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons">brightness_7</i>
                              {this.state.forecast.hours[18].airTemperature[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[24].airTemperature[0].value.toFixed()}
                              ºC
                            </li>
                          )}
                        </ul>
                        <p>Evening 17 - 23h</p>

                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons">opacity</i>
                              {this.state.forecast.hours[18].waterTemperature[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[24].waterTemperature[0].value.toFixed()}
                              ºC
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="midRow">
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="fas fa-water"></i>{" "}
                              {this.state.forecast.hours[18].waveHeight[0].value.toFixed(
                                1
                              )}{" "}
                              -{" "}
                              {this.state.forecast.hours[24].waveHeight[0].value.toFixed(
                                1
                              )}{" "}
                              m
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="downRow">
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons"> autorenew</i>
                              {this.state.forecast.hours[18].wavePeriod[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[24].wavePeriod[0].value.toFixed()}{" "}
                              s
                            </li>
                          )}
                        </ul>
                        <ul>
                          {!!this.state.forecast.hours && (
                            <li>
                              <i class="material-icons"> arrow_upward</i>
                              {this.state.forecast.hours[18].windSpeed[0].value.toFixed()}{" "}
                              -
                              {this.state.forecast.hours[24].windSpeed[0].value.toFixed()}{" "}
                              kph
                            </li>
                          )}
                        </ul>
                      </div>
                    </React.Fragment>
                  ) : (
                    <Preload />
                  )}
                </div>
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
