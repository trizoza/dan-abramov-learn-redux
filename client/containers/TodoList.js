import { connect } from 'react-redux'
// 333 withRouter works only on react-router 3+
import { withRouter } from 'react-router'
import Components_TodoList from '../components/TodoList'
import { toggleTodo } from '../state/actions/todos'
import { getVisibleTodos } from '../state/reducers'

// 222 moved to reducer
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'completed':
//       return todos.filter(t => t.completed)
//     case 'due':
//       return todos.filter(t => !t.completed)
//     case 'all':
//       return todos
//     default:
//       throw new Error(`Unknown filter: ${filter}`)
//   }
// }

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(
    // 222 after extracting getVisibleTodos to reducers receive the entire state
    // state.todos,
    state,
    params.filter || 'all'
  )
})

// 111 mapDispatchToProps exchanged with short ES6 syntax
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

// 333 withRouter lets the component accept the params from React router directly (in deeper levels too)
const TodoList = withRouter(connect(
  mapStateToProps,
  // 111 possible because id passed in corresponds the id in dispatch
  // mapDispatchToProps
  { onTodoClick: toggleTodo }
)(Components_TodoList))

export default TodoList
