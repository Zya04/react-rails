import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Article from './Article'
import Delete from './Delete'
import Post from './Post'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/article' component={Article} />
          <Route exact path='/article/delete' component={Delete} />
          <Route exact path='/article/post' component={Post} />
        </Switch>
      </div>
    )
  }
}

export default App
