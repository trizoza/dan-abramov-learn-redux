import React from 'react'
import ReactDOM from 'react-dom'

// import Counter from './components/Counter'
import Todo from './components/Todo'
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

const todoApp = () => (
  <Todo store={store.getState().todos} />
)

const render = () => {
  ReactDOM.render(todoApp(), document.getElementById('root'))
}

render()
store.subscribe(render)
