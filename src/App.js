import React, { Component } from 'react';
import MapContainer from './components/MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MapContainer />
      </div>
    );
  }
}

export default App;
