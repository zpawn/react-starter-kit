import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Dashboard } from './components/Dashboard'
import { Counter } from './components/Counter'

function App() {
  return (
    <Router>
      <nav>
        <ul>
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
          <Route path='/counter'>
            <Counter/>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
