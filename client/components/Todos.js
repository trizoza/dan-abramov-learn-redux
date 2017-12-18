import React from 'react'

import Todo from './Todo'
import AddTodo from './AddTodo'

const Todos = ({ todos, addTodo, toggleTodo, setVisibilityFilter, filter }) => {
  console.log(todos)
  return (
    <div style={{ border: '1px solid blue' }}>
      <h1>Todos</h1>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((todo) => {
          if (filter === 'SHOW_COMPLETED' && !todo.completed) {
            return
          } else if (filter === 'SHOW_DUE' && todo.completed) {
            return
          }
          return (
            <Todo key={todo.id} {...todo} toggleTodo={() => toggleTodo(todo.id)} />
          )
        })}
      </ul>
      <button type='button' value='SHOW_ALL' onClick={setVisibilityFilter}>all</button>
      <button type='button' value='SHOW_COMPLETED' onClick={setVisibilityFilter}>completed</button>
      <button type='button' value='SHOW_DUE' onClick={setVisibilityFilter}>due</button>
    </div>
  )
}

export default Todos
