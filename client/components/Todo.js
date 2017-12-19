import React from 'react'

const Todo = ({ id, text, completed, onTodoClick }) => {
  return (
    <li onClick={onTodoClick}
      style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {text}
    </li>
  )
}

export default Todo
