import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import selectBoard from './Components/selectBoard';
import Boardroom from './Components/Boardroom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Route exact path="/" component={Nav} />
          <div className="gameboard">
            <Route exact path="/" component={selectBoard} />
            <Route path="/board1" component={Boardroom} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
