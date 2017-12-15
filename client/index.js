import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Containers_Counter from './containers/Counter'
// import Containers_Todo from './containers/Todo'
import store from './store'

let el = document.getElementById('root')

if (el) {
  render(
    <Provider store={store}>
      <Containers_Counter />
    </Provider>,
    document.getElementById('root')
  )
}
