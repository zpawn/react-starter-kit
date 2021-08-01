import React from 'react';
import { connect } from 'react-redux';
import {
  Link,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import { PrivateRoute } from './hoc/PrivateRoute'
import { Dashboard } from './components/Dashboard'
import { Counter } from './components/Counter'
import { Login, Logout } from './components/Auth'

const mapStateToProps = (state) => ({
  isAuth: Boolean(state.auth?.token),
});

const App = ({ isAuth }) => (
  <Router>
    <nav>
      <ul>
        <li>
          {
            isAuth
              ? <Link to='/logout'>Logout</Link>
              : <Link to='/login'>Login</Link>
          }
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
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <PrivateRoute path='/counter'>
          <Counter/>
        </PrivateRoute>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/logout'>
          <Logout/>
        </Route>
      </Switch>
    </section>
  </Router>
);

export default connect(mapStateToProps)(App)
