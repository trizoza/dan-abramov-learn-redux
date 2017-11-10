import { createStore, compose } from 'redux'
import todoApp from './reducers/todoApp'
// import counter from './reducers/counter'

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

const store = createStore(todoApp, enhancers)

export default store
