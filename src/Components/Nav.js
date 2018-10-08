import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="navbar">
            <nav className="nav1">
                <ul className="list1">
                    <li>Create an Account</li>
                    <li>Login</li>
                    <li>How To Play</li>
                    {/* <li>Add a Friend</li>
            <li>View Friends List</li> */}
                </ul>
                <ul className="list2">
                    <h3>Check Us Out On Twitter!</h3>
                    <li><a href="https://twitter.com/rick_law">Ricky Law</a></li>
                    <li><a href="https://twitter.com/jeffleecodes">Jeff Lee</a></li>
                </ul>
            </nav>
        </div>
      </div>
    )
  }
}

export default Nav
