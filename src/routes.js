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
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='dashboard' component={Dashboard} onEnter={requireAuth} />
      <Route path='participants' component={Participants} onEnter={requireAuth} />
      <Route path='participants/form/:id' component={ParticipantsForm} onEnter={requireAuth} />
      <Route path='participants/form' component={ParticipantsForm} onEnter={requireAuth} />
      <Route path='components' component={Components} onEnter={requireAuth} />
    </Route>
  </Route>
);
