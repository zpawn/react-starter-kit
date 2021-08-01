import React from 'react'

export const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <button type='button' onClick={onDecrement}>-</button>
      {` ${value} `}
    <button type='button' onClick={onIncrement}>+</button>
  </div>
)
