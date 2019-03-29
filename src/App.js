/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import MapContainer from './components/MapContainer';

class App extends Component {
  componentDidMount() {
    fetch('/data/boat_ramps.geojson', { mode: 'no-cors' })
      .then(response => response.json()).then((data) => {
        this.setState({ markers: data });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MapContainer {...this.state} />
      </div>
    );
  }
}

export default App;
