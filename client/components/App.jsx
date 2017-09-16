import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'

const App = () => (
  <Router>
    <div className="container">

        <div className="tile">
          Tiles
        </div>
        <div className="tile">
          Tiles
        </div>
        <div className="tile">
          Tiles
        </div>
        <div className="tile">
          Tiles
        </div>
        <div className="tile">
          Tiles
        </div>
        <div className="tile">
          Tiles
        </div>
        <div className="tile">
          Tiles
        </div>
        <div className="tile">
          Tiles
        </div>
        <div className="tile">
          Tiles
        </div>
        <div className="description">
          Description
        </div>
      <Route exact path="/" component={Greetings}/>
    </div>
  </Router>
)

export default App
