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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
