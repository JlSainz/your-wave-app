import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker.tsx";
import LocationSearchInput from "./LocationSearchInput";
import "./GmapsLocate.css";

import "./Gmaps.css";

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lng: this.props.coordinates[0],
        lat: this.props.coordinates[1]
      },
      zoom: 10
    };
  }

  // getCoordinates(lnglat) {

  // }

  render() {
    return (
      <div className="map">
        <LocationSearchInput
          className="location-search-input"
          getCoordinates={lnglat => this.getCoordinates(lnglat)}
        />
        <GoogleMapReact
          bootstrapURLKeys={{
            key:
              "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDUeQXCyJDlhOtCB8JwWAk8zCxpjk6k-jo&libraries=places"
          }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            name="My Marker"
            color="black"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
