import React, { Component } from "react";
import SpotsService from "./../services/SpotsService";
import Gmaps from "./../gmaps/Gmaps";
import "./Spots.css";

export default class Spots extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.spServices = new SpotsService();
  }

  componentDidMount() {
    this.spServices.allSpots().then(data => {
      this.setState({ ...this.state, data: data.spots });
    });
  }

  render() {
    return (
      <div className="container-spot">
        {this.state.data.map((spot, index) => {
          return (
            <div className="spot" key={index}>
              <h1>Name: {spot.name}</h1>
              <img src={spot.image} alt="Foto" />
              <p>Country: {spot.country}</p>
              <ul>
                {/* <li>Lat: {spot[0].latlng.lat}</li>
                <li>Lng: {spot[0].latlng.lng}</li> */}
                {/* <li>Location: {spot.location.coordinates}</li> */}
                <li>Nearby: {spot.nearby}</li>
                <li>Consistence: {spot.consistence}</li>
                <li>Commment: {spot.comment.author}</li>
                <li>Wave form: {spot.wave_form}</li>
                <li>Wave direction: {spot.wave_direction}</li>
                <li>Weather: {spot.weather}</li>
                <li>Perioid: {spot.period}</li>
                <li>Break type: {spot.break_type}</li>
                <li>Level: {spot.level}</li>
                <li>Vibe: {spot.vibe}</li>
              </ul>
              <Gmaps coordinates={spot.location.coordinates} />
            </div>
          );
        })}
      </div>
    );
  }
}
