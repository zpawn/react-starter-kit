import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { loginAction } from '../../../store/auth';
import { Login } from '../../../components/Auth';

const mapStateToProps = ({ auth }) => ({ token: auth.token });

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password) => dispatch(loginAction(email, password)),
});

/**
 * @param onLogin {function}
 * @param token {string}
 * @return {JSX.Element}
 * @constructor
 */
const LoginContainer = ({ onLogin }) => {
  const history = useHistory();

  const onSubmit = (email, password) => {
    onLogin(email, password).then(() => {
      history.replace('/');
    });
  };

  return <Login onSubmit={onSubmit} />
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
