import React, { Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../../hoc/PrivateRoute';
import { LogoutContainer } from '../../containers/Auth';
import { DashboardContainer } from '../../containers/Dashboard';
import { CounterContainer } from '../../containers/Counter';

export const VendorLayout = () => (
  <Fragment>
    <nav>
      <ul>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
        <li>
          <Link to='/counter'>Counter</Link>
        </li>
      </ul>
    </nav>

    <section>
      <Switch>
        <PrivateRoute exact path='/'>
          <DashboardContainer />
        </PrivateRoute>
        <PrivateRoute path='/counter'>
          <CounterContainer />
        </PrivateRoute>
        <Route path='/logout'>
          <LogoutContainer />
        </Route>
        <Route path="*">
          <h1>404 page</h1>
        </Route>
      </Switch>
    </section>
  </Fragment>
)
