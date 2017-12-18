import { connect } from 'react-redux'
import Components_Todos from '../components/Todos'
import { addTodo, toggleTodo } from '../state/actions/todos'
import { setVisibilityFilter } from '../state/actions/filter'

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
    setVisibilityFilter: (event) => {
      dispatch(setVisibilityFilter(event.target.value))
    }
  }
}

const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Components_Todos)

export default Todos
