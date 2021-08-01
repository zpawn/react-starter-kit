import React from 'react';
import { connect } from 'react-redux';
import { VendorLayout, SimpleLayout } from './Layouts';

const mapStateToProps = (state) => ({
  isAuth: Boolean(state.auth?.token),
});

const App = ({ isAuth }) => isAuth ? <VendorLayout/> : <SimpleLayout/>

export default connect(mapStateToProps)(App)
