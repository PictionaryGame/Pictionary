import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class selectBoard extends Component {
  render() {
    return (
      <div>
        <div className="select">
          <h2>1 vs 1</h2>
          <div className="boards">
            <Link to={'/board1'}>
              <div className="board1">
                  <h4>Board 1</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="select">
          <h2>2 vs 2</h2>
          <div className="boards">
            <Link to={'/board10'}>
              <div className="board1">
                <h4>Board 1</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>  
    )
  }
}

export default selectBoard
