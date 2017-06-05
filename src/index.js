'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './containers/Counter';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './containers/counterReducer';
import './dist/css/default.css';

const reducers = combineReducers({
  counter: counterReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>
  , document.querySelector('[data-js="app"]'));
