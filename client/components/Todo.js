import React from 'react'

const Todo = ({ id, text, completed, toggleTodo }) => {
  return (
    <li onClick={toggleTodo}
      style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {text}
    </li>
  )
}

export default Todo
