import { createStore, compose } from 'redux'
import counter from './reducers/counter'

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

const store = createStore(counter, 0, enhancers)

export default store
