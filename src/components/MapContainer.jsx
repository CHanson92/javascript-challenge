/* eslint-disable yoda */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import { connect } from 'react-redux';
import '../styles/app.scss';
import { area50, area200, area526 } from '../redux/modules/areaReducer';

export const mapStateToProps = state => ({
  geoJson: state,
});

const mapDispatchToProps = dispatch => ({
  AREA_50: item => dispatch(area50(item)),
  AREA_200: item => dispatch(area200(item)),
  AREA_526: item => dispatch(area526(item)),
});

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -28.0167,
      lng: 153.4000,
      zoom: 10,
    };
  }

  onEachFeature(feature, layer) {
    const material = feature.properties.material;
    const area = feature.properties.area_;
    layer.bindPopup(
      `Material: ${material}
      </br>`
      + `Area: ${area}`,
    );
  }

  render() {
    const data = this.props;
    const position = [this.state.lat, this.state.lng];
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          key="geojson-01"
          style={() => ({
            color: '#DAA520',
            weight: 7,
          })}
          data={data.geoJson}
          onEachFeature={this.onEachFeature}
        />
      </Map>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
