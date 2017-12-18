import { connect } from 'react-redux'
import Components_TodoList from '../components/TodoList'
import { toggleTodo } from '../state/actions/todos'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'completed':
      return todos.filter(t => t.completed)
    case 'due':
      return todos.filter(t => !t.completed)
    case 'all':
      return todos
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}

const mapStateToProps = (state, props) => {
  return {
    todos: getVisibleTodos(state.todos, props.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Components_TodoList)

export default TodoList
