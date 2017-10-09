import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'

const App = () => (
  <Router>
    <div className="container">
        <div className="banner">
          <div className="flex-container">
            <div className="logo">
              LOGO
            </div>
            <div className="menu">
              <p className="menutext">
                MENU OPTION MENU OPTION MENU OPTION MENU OPTION
              </p>
            </div>
          </div>
        </div>
        <div className="tiles">
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          <div className="tile">Tile</div>
          </div>
        <div className="description">
          Description
        </div>
      <Route exact path="/" component={Greetings}/>
    </div>
  </Router>
)

export default App
