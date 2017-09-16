import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'

const App = () => (
  <Router>
      <div class="container is-fluid">
        <div id="grid" className="columns">
          <div className="column">
            Header
          </div>
          </div>
        <div id="grid" className="columns">
            <div className="column">
              First column
            </div>
          <div className="column">
            Second column
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
