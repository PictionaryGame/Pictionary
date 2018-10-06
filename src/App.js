import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Components/Canvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pictionary</h1>
        <Canvas />
      </div>
    );
  }
}

export default App;
