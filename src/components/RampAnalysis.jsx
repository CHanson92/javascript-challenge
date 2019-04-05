import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryLegend, VictoryPie } from 'victory';
import { mapStateToProps } from './MapContainer';

class RampAnalysis extends Component {
  render() {
    const ramps = this.props.geoJson.features;
    const rampArray = ramps.map(result => (result.properties.material));
    const gravel = rampArray.filter(ramp => ramp === 'Gravel').length;
    const concrete = rampArray.filter(ramp => ramp === 'Concrete').length;
    const bitumen = rampArray.filter(ramp => ramp === 'Bitumen').length;
    const interlockConcBlock = rampArray.filter(ramp => ramp === 'Interlock Conc Block').length;
    const earth = rampArray.filter(ramp => ramp === 'Earth').length;
    const other = rampArray.filter(ramp => ramp === 'Other').length;
    return (
      <div className="rampContainer">
        <VictoryLegend
          x={150}
          y={80}
          title="Legend"
          centerTitle
          orientation="vertical"
          gutter={20}
          style={{ border: { stroke: 'black' }, title: { fontSize: 20 } }}
          data={[
            { name: 'Gravel', symbol: { fill: '9FA4A9' } },
            { name: 'Concrete', symbol: { fill: 'DAA520' } },
            { name: 'Bitumen', symbol: { fill: '595358' } },
            { name: 'Interlock Conc Block', symbol: { fill: '55DDE0' } },
            { name: 'Earth', symbol: { fill: '33658A' } },
            { name: 'Other', symbol: { fill: 'B24C63' } },
          ]}
        />
        <VictoryPie
          colorScale={['9FA4A9', 'DAA520', '595358', '55DDE0', '33658A', 'B24C63']}
          data={[
            { x: gravel, y: gravel },
            { x: concrete, y: concrete },
            { x: bitumen, y: bitumen },
            { x: interlockConcBlock, y: interlockConcBlock },
            { x: earth, y: earth },
            { x: other, y: other },
          ]}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(RampAnalysis);
