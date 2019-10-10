import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker.tsx";
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

  render() {
    return (
      <div className="map">
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
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
