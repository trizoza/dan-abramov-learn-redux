import visibilityFilter from './visibilityFilter'
import todos from './todos'
import { combineReducers } from 'redux'

// *** HANDMADE COMBINE REDUCERS ***
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   }
// }

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
})

export default todoApp
