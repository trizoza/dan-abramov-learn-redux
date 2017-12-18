import React from 'react'
import Components_Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <Components_Todo key={todo.id} {...todo} toggleTodo={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default TodoList
