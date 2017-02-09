'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './style-default.css';

injectTapEventPlugin();

render(
  <Router routes={routes} history={hashHistory} />, document.querySelector('[data-js="app"]')
);
