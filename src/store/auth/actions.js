import { loginService } from '../../services/auth';
import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN, } from './types'

export const authSetToken = token => ({
  type: AUTH_SET_TOKEN,
  token,
});

export const authRemoveToken = () => ({ type: AUTH_REMOVE_TOKEN });

export const loginAction = (email, password) => dispatch => {
  return loginService(email, password)
    .then((token) => {
      localStorage.setItem('ff:token', token);
      dispatch(authSetToken(token));
      return Promise.resolve()
    })
    .catch(() => {
      // @todo set notification
    })
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem('ff:token');
  dispatch(authRemoveToken());
};
