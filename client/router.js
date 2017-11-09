import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './components/Counter'
import store from './store'

// const router = (
//   <Counter value={store.getState()} increment={() => store.dispatch({ type: 'INCREMENT' })} />
// )

const router = () => (
  <Counter value={store.getState()} increment={() => store.dispatch({ type: 'INCREMENT' })} />
)

const render = () => {
  ReactDOM.render(router(), document.getElementById('root'))
}

render()
store.subscribe(render)
