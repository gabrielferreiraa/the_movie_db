import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './style-default.css';

injectTapEventPlugin();

render(
  <Router routes={routes} history={browserHistory} />, document.querySelector('[data-js="app"]')
);
