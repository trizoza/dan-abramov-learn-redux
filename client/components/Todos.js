import React from 'react'

import Todo from './Todo'
import AddTodo from './AddTodo'

const Todos = ({ todos, addTodo, toggleTodo }) => (
  <div style={{ border: '1px solid blue' }}>
    <h1>Todos</h1>
    <AddTodo addTodo={addTodo} />
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} toggleTodo={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  </div>
)

export default Todos
