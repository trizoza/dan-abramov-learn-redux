import { createStore, compose } from 'redux'
import rootReducer from './state/reducers/index'
import { loadState, saveState } from './localStorage'
import { throttle } from 'lodash'

const configureStore = () => {
  const persistedState = loadState()
  const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
  const store = createStore(rootReducer, persistedState, enhancers)
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 1000))
  return store
}

export default configureStore
