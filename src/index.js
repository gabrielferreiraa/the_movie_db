import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './style-default.css';

const elRoot = document.querySelector('[data-js="app"]');

render(
  <Router routes={routes} history={browserHistory} />,
  elRoot
);
