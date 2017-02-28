import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { requireAuth } from 'utils/Auth';
import LoginPage from 'containers/Login';
import Dashboard from 'containers/Dashboard';
import Components from 'containers/Components';
import Participants from 'containers/Participants';
import ParticipantsForm from 'containers/Participants/form';
import App from 'containers/App';

export default (
  <Route>
    <Route path='login' component={LoginPage} />
    <Route path='/' component={App} onEnter={requireAuth}>
      <IndexRoute component={Dashboard} />
      <Route path='dashboard' component={Dashboard} />
      <Route path='participants' component={Participants} />
      <Route path='participants/form/:id' component={ParticipantsForm} />
      <Route path='participants/form' component={ParticipantsForm} />
      <Route path='components' component={Components} />
    </Route>
  </Route>
);
