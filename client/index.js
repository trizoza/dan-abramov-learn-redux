import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Components_Root from './components/Root'
import configureStore from './configureStore'

let el = document.getElementById('root')
const store = configureStore()

if (el) {
  render(
    <Components_Root store={store} />,
    document.getElementById('root')
  )
}
