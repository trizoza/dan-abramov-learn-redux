import React from 'react'

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div style={{border: '1px solid red'}}>
    <h2>Counter</h2>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

export default Counter
