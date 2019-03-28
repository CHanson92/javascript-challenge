/* eslint-disable array-callback-return */
/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '75%',
  height: '75%',
};

export class MapContainer extends Component {
  componentDidUpdate() {
    const google = window.google;
    this.map = new google.maps.Map(this.refs.map, {
      center: this.props.center,
      zoom: 4,
    });

    this.createMarkers(this.props.markers);
  }

  createMarkers(users) {
    const google = window.google;

    users.map((user) => {
      this.marker = new google.maps.Marker({
        position: {
          lat: user.location.latitude,
          lng: user.location.longitude,
        },
        map: this.map,
      });
      this.state.markers.push(this.marker);
    });
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={5}
          style={mapStyles}
          initialCenter={{
            lat: -28.0167,
            lng: 153.4000,
          }}>
          <Marker
            title="Marker"
            name="Ship"
          />
        <Map/>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDiW3Irb8VAVLPUNYB1wf31D8a1CfLFJLE',
})(MapContainer);
