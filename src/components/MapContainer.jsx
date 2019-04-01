import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import '../styles/app.scss';
import geoJson from '../data/boat_ramps.geojson';


export default class MapContainer extends Component {
  state = {
    lat: -28.0167,
    lng: 153.4000,
    zoom: 5,
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
          data={geoJson}
        />
        <Marker key={`marker-01`} position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}