import React from 'react'
import { connect } from 'react-redux';
import { loginAction } from '../../../store/auth';
import { useHistory } from 'react-router';

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
const Login = ({ onLogin }) => {
  let history = useHistory();

  let onClick = () => {
    onLogin().then(() => {
      history.replace('/');
    });
  };

  return (
    <section>
      <h1>Login</h1>
      <button type='button' onClick={onClick}>log in</button>
    </section>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
