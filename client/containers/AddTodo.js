import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../state/actions/todos'

let AddTodo = ({ dispatch }) => {
  let newTodo = ''

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      // return if empty string provided
      if (!newTodo.value.trim()) {
        return
      }
      // call action with new todo
      dispatch(addTodo(newTodo.value))
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

AddTodo = connect()(AddTodo)

export default AddTodo
