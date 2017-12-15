import { connect } from 'react-redux'
import Components_Todo from '../components/Todo'
import { addTodo } from '../actions/todo'

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
)(Components_Todo)

export default Todos
