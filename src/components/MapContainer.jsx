import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON, } from 'react-leaflet';
import '../styles/app.scss';
import geoJson from '../data/boat_ramps.js';


export default class MapContainer extends Component {
  state = {
    lat: -28.0167,
    lng: 153.4000,
    zoom: 10,
    geoJsonData: geoJson,
  }

  onEachFeature(feature, layer) {
    console.log(feature);
    layer.bindPopup(feature.properties.material);
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
          ref="geojson"
          data={this.state.geoJsonData}
          style={() => ({
            color: 'red',
            weight: 10,
          })}
          onEachFeature={this.onEachFeature.bind(this)}
        />
      </Map>
    )
  }
}