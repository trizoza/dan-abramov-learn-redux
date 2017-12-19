import { combineReducers } from 'redux'

import counter from './counter'
import todos, * as fromTodos from './todos'
// 111 no need for filter as filter is handled by link
// import filter from './filter'

const rootReducer = combineReducers({
  counter,
  todos
  // 111
  // filter
})

export default rootReducer

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter)
