import React from 'react'
import Components_Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo) => (
      <Components_Todo key={todo.id} {...todo} onTodoClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

export default TodoList
