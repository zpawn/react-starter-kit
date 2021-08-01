import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginContainer, LogoutContainer } from '../../containers/Auth';

export const SimpleLayout = () => (
  <Switch>
    <Route path='/login'>
      <LoginContainer />
    </Route>
    <Route path='/logout'>
      <LogoutContainer />
    </Route>
    <Route path="*">
      <Redirect to='/login' />
    </Route>
  </Switch>
);
