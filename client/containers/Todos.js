import { connect } from 'react-redux'
import Components_Todos from '../components/Todos'
import { addTodo } from '../state/actions/todos'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Components_Todos)

export default Todos
