import React from 'react'
import store from '../store'

let nextTodoId = 0

class Todo extends React.Component {
  handleClick (e) {
    const whatToDo = this.refs.whattodo.value
    store.dispatch({ type: 'ADD_TODO', text: whatToDo, id: nextTodoId++ })
    this.refs.whattodo.value = ''
  }

  render () {
    return (
      <div>
        <input type='text' ref='whattodo' placeholder='what to do?' />
        <button onClick={this.handleClick.bind(this)}>add</button>
        <ul>
          {this.props.store.map((todo) =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Todo
