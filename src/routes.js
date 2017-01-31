import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LoginPage from 'containers/Login';
import Dashboard from 'containers/Dashboard';
import Participants from 'containers/Participants';
import App from 'containers/App';

export default (
  <Route>
    <Route path='login' component={LoginPage} />
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='dashboard' component={Dashboard} />
      <Route path='participants' component={Participants} />
      <Route path='participants/form/:id' component={Participants} />
    </Route>
  </Route>
);
