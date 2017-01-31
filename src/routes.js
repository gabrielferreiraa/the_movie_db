import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LoginPage from 'containers/LoginPage';
import Dashboard from 'containers/Dashboard';

export default (
  <Route>
    <Route path='login' component={LoginPage} />
    <Route path='/' component={Dashboard}>
      <IndexRoute component={Dashboard} />
      <Route path='dashboard' component={Dashboard} />
    </Route>
  </Route>
);
