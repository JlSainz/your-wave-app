import React, { Component } from "react";
import SpotsService from "./../services/SpotsService";
import Gmaps from "./../gmaps/Gmaps";
import "./Spots.css";

export default class Spots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: []
    };
  }
  render() {
    return (
      <div className="container-spot">
        {this.props.spots.map((spot, index) => {
          return (
            <div className="spot" key={index}>
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
                <li>Coordinates: {spot.location.coordinates}</li>
              </ul>
              <Gmaps coordinates={spot.location.coordinates} />
              <button>Get Forecast!</button>
            </div>
          );
        })}
      </div>
    );
  }
}
