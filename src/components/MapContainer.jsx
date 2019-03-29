/* eslint-disable array-callback-return */
/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import {
 Map, GoogleApiWrapper, InfoWindow, Marker
} from 'google-maps-react';

const mapStyles = {
  width: '75%',
  height: '75%'
};

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const markers = this.props.markers;
    return (
      <Map google={this.props.google}
          style={mapStyles}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: -27.470125,
            lng: 153.021072
          }}
          zoom={5}>
          {markers.features.map(item => (
            console.log(item.geometry),
          <Marker 
            onClick={this.onMarkerClick}
            key={item.id}
            name={item.properties.material}
            // position={item.geometry.coordinates[0].map(coords => (
            //   {lat: coords[0], lng: coords[1]}
            // ))}
          />
          ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDiW3Irb8VAVLPUNYB1wf31D8a1CfLFJLE',
})(MapContainer);
