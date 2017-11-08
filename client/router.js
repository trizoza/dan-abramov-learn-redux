import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from './components/Main'
import Board from './components/Board'
import Topic from './components/Topic'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Board} />
      <Route path='/topics/:id' component={Topic} />
    </Route>
  </Router>
)

render(router, document.getElementById('root'))
