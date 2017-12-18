import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

// import Containers_Counter from '../containers/Counter'
import Components_Todos from './Todos'
// import Components_App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {/* <Route path='/(:filter)' component={Components_App} /> */}
      {/* <Route path='/counter' component={Containers_Counter} /> */}
      <Route path='/(:filter)' component={Components_Todos} />
    </Router>
  </Provider>
)

export default Root
