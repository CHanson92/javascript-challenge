/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
import AreaAnalysis from './components/AreaAnalysis';
import RampAnalysis from './components/RampAnalysis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Map and Analysis of boat ramps on the Gold Coast!</h1>
        </header>
        <MapContainer />
        <h3 className="AATitle">Area Analysis</h3>
        <AreaAnalysis />
        <h3 className="RATitle">Ramp Analysis</h3>
        <RampAnalysis />
        <footer>This was made by Chris Hanson</footer>
      </div>
    );
  }
}

export default App;
