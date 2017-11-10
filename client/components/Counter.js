import React from 'react'

class Counter extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}

export default Counter
