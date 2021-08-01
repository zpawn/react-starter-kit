import React from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction } from '../../store/counter'
import { Counter } from '../../components/Counter';

const mapStateToProps = (state) => ({
  value: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(incrementAction()),
  onDecrement: () => dispatch(decrementAction()),
});

const CounterContainer = ({ value, onIncrement, onDecrement }) => (
  <Counter
    value={value}
    onDecrement={onDecrement}
    onIncrement={onIncrement}
  />
)

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
