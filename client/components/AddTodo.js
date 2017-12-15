import React from 'react'

const AddTodo = ({ addTodo }) => {
  let newTodo = ''

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      // return if empty string provided
      if (!newTodo.value.trim()) {
        return
      }
      // call action with new todo
      addTodo(newTodo.value)
      // set input value back to empty string
      newTodo.value = ''
    }}>
      <input type='text'
        name='todo'
        placeholder='Type your task!'
        ref={(input) => { newTodo = input }} />
      <input type='submit' value='Add TODO' />
    </form>
  )
}

export default AddTodo