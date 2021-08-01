import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutAction } from '../../../store/auth';

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logoutAction()),
});

const Logout = ({ onLogout }) => {
  let history = useHistory();

  onLogout();
  history.push('/login')

  return null;
}

export default connect(null, mapDispatchToProps)(Logout)
