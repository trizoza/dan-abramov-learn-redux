import { connect } from 'react-redux'
import Components_Counter from '../components/Counter'
import { onIncrement, onDecrement } from '../actions/counter'

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(onIncrement())
    },
    onDecrement: () => {
      dispatch(onDecrement())
    }
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Components_Counter)

export default Counter
