import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/article/App'
import {BrowserRouter as Router, Route} from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route path="/article" component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
