import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { authReducer } from './auth';

export const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer
});
