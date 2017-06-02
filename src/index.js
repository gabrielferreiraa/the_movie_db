'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import './dist/css/default.css';

const reducers = combineReducers({
    app: () => ({value: 'Opa'})
});


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.querySelector('[data-js="app"]'));
