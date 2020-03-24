import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/page' component={Home} />
          <Route exact path='/page/about' component={About} />
          <Route exact path='/page/contact' component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App
