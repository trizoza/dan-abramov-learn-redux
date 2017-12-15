import React from 'react'

const Todos = ({ todos, addTodo }) => {
  let newTodo = ''

  return (
    <div style={{ border: '1px solid blue' }}>
      <h1>Todos</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        if (!newTodo.value.trim()) {
          return
        }
        addTodo(newTodo.value)
        newTodo.value = ''
      }}>
        <input type='text'
          name='todo'
          placeholder='Type your task!'
          ref={(input) => { newTodo = input }} />
        <input type='submit' value='Add TODO' />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
