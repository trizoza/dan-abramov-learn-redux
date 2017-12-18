import React from 'react'

import Containers_TodoList from '../containers/TodoList'
import Containers_AddTodo from '../containers/AddTodo'
import Components_FilterLink from './FilterLink'

const Todos = ({ params }) => {
  // console.log('params ', params)
  return (
    <div style={{ border: '1px solid blue' }}>
      <h1>Todos</h1>
      <Containers_AddTodo />
      <Containers_TodoList filter={params.filter || 'all'} />
      <p>
        Show:
        {' '}
        <Components_FilterLink filter='all'>All</Components_FilterLink>
        {', '}
        <Components_FilterLink filter='due'>Due</Components_FilterLink>
        {', '}
        <Components_FilterLink filter='completed'>Completed</Components_FilterLink>
      </p>
    </div>
  )
}

export default Todos
