/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryLegend, VictoryPie } from 'victory';
import { mapStateToProps } from './MapContainer';

class AreaAnalysis extends Component {
  render() {
    const areas = this.props.geoJson.features;
    const areasArray = areas.map(result => (result.properties.area_));
    const area50 = areasArray.filter(area => area < 50).length;
    const area200 = areasArray.filter(area => area > 50 && area < 200).length;
    const area526 = areasArray.filter(area => area > 200).length;
    return (
      <div className="victoryContainer">
        <VictoryLegend
          x={150}
          y={150}
          title="Legend"
          centerTitle
          orientation="vertical"
          gutter={20}
          style={{ border: { stroke: 'black' }, title: { fontSize: 20 } }}
          data={[
            { name: 'Area < 50', symbol: { fill: '9FA4A9' } },
            { name: '50 < Area < 200', symbol: { fill: 'DAA520' } },
            { name: 'Area > 200', symbol: { fill: '595358' } },
          ]}
        />
        <VictoryPie
          colorScale={['9FA4A9', 'DAA520', '595358']}
          data={[
            { x: area50, y: area50 },
            { x: area200, y: area200 },
            { x: area526, y: area526 },
          ]}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AreaAnalysis);
