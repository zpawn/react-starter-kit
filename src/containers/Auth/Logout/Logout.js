import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutAction } from '../../../store/auth';

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logoutAction()),
});

const LogoutContainer = ({ onLogout }) => {
  let history = useHistory();

  onLogout()
  history.push('/login')

  return null;
}

export default connect(null, mapDispatchToProps)(LogoutContainer)
