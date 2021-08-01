import { clone, assocPath } from 'ramda';
import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from './types';

const initState = {
  token: null
};

const authSetToken = (state, action) =>
  assocPath(['token'], action?.token || null)(clone(state));

const authRemoveToken = (state) => assocPath(['token'], null)(clone(state));

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN: return authSetToken(state, action);
    case AUTH_REMOVE_TOKEN: return authRemoveToken(state);
    default: return state;
  }
};
