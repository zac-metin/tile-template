import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'

const App = () => (
  <Router>
    <div className="container">
        <div className="banner">
          <div className="flex-container">
            <div className="logo">
              Dev Academy - Company Database
            </div>
            <div className="menu">
              <p className="menutext">
                <a href="#">NATIONWIDE</a>
                <a href="#">WELLINGTON</a>
                <a href="#">AUCKLAND</a>
                <a href="#">OTHER</a>
                <a href="#">REMOTE</a>
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
          <div className="contenttitle">
            Title
          </div>
          <div className="content">
            Content
          </div>
        </div>
      <Route exact path="/" component={Greetings}/>
    </div>
  </Router>
)

export default App
