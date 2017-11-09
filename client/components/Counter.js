import React from 'react'

class Counter extends React.Component {
  render () {
    return (
      <div>
        <h1 onClick={this.props.increment}>{this.props.value}</h1>
      </div>
    )
  }
}

export default Counter
