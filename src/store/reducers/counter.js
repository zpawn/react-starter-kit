export const actionTypes = {
  INCREMENT: 'COUNTER:INCREMENT',
  DECREMENT: 'COUNTER:DECREMENT',
};

// Actions
export const incrementAction = () => ({
  type: actionTypes.INCREMENT,
});

export const decrementAction = () => ({
  type: actionTypes.DECREMENT,
});

// Reducers
export const counter = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1
    case actionTypes.DECREMENT:
      return state - 1
    default:
      return state
  }
}
