import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'

const App = () => (
  <Router>
    <div className="container">

      <div id="grid" className="columns">

        <div className="column">
          Header
        </div>

      </div>

      <div id="grid" className="columns">

        <div id="grid" className="columns">
          Tiles
        </div>
        <div className="column">
          Description
        </div>
        <div className="column">
          Third column
        </div>
        <div className="column">
          Fourth column
        </div>
      </div>
      <Route exact path="/" component={Greetings}/>
    </div>
  </Router>
)

export default App
