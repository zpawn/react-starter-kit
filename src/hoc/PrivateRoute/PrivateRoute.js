import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const mapStateToProps = (state) => ({
  token: state.auth?.token || null,
});

const PrivateRoute = ({ children, token, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => Boolean(token)
      ? children
      : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location }
          }}
        />
      )
    }
  />
);

export default connect(mapStateToProps)(PrivateRoute)
