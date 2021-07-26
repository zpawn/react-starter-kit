import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction } from '../../store/reducers/counter'

const mapStateToProps = (state, ownProps) => ({
  value: state.counter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onIncrement: () => dispatch(incrementAction()),
  onDecrement: () => dispatch(decrementAction()),
});

export class Counter extends PureComponent {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        <button onClick={onDecrement}>-</button>
          {` ${value} `}
        <button onClick={onIncrement}>+</button>
      </p>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
