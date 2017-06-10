'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from 'containers/App';
import { DEV_TOOLS } from 'constants/configConstants';
import globalReducers from 'reducers/GlobalReducers';

import './dist/css/default.css';

ReactDOM.render(
  <Provider store={createStore(globalReducers, DEV_TOOLS)}>
    <App />
  </Provider>
  , document.querySelector('[data-js="app"]'));
