import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import '../styles/app.scss';
import geoJson from '../data/boat_ramps.js';


export default class MapContainer extends Component {
  state = {
    lat: -28.0167,
    lng: 153.4000,
    zoom: 5,
    geoJsonData: geoJson,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON 
          key={`geojson-01`}
          data={this.state.geoJsonData}
        />
      </Map>
    )
  }
}