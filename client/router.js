import React from 'react'
import { render }from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
// import Todo from './components/Todo'
import store from './store'

// *** NOT WORKING ***
// const counter = (
//   <Counter value={store.getState()} increment={() => store.dispatch({ type: 'INCREMENT' })} />
// )

// const counter = () => (
//   <Counter value={store.getState()}
//     increment={() => store.dispatch({ type: 'INCREMENT' })}
//     decrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />
// )

let el = document.getElementById('root')

if (el) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}
