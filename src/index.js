'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import './dist/css/default.css';

import App from 'containers/App';
import { DEV_TOOLS } from 'constants/configConstants';
import globalReducers from 'reducers/GlobalReducers';

const store = applyMiddleware(promise)(createStore)(globalReducers, DEV_TOOLS);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('[data-js="app"]'));
