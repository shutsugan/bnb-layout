import React, { Component } from 'react';
import List from './List';
import Map from './Map';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
        <Map />
      </div>
    );
  }
}

export default App;
