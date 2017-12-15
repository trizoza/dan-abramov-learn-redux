import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// import Containers_Counter from './containers/Counter'
import Containers_Todos from './containers/Todos'
import store from './store'

let el = document.getElementById('root')

if (el) {
  render(
    <Provider store={store}>
      <Containers_Todos />
    </Provider>,
    document.getElementById('root')
  )
}
