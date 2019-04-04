/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import MapContainer from './components/MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Here&apos;s the boat ramps on the Gold Coast!</h1>
        </header>
        <MapContainer />
        <footer>This was made by Chris Hanson</footer>
      </div>
    );
  }
}

export default App;
