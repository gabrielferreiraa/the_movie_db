import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import globalReducers from 'reducers/GlobalReducers';

export function configureStore () {
  return applyMiddleware(promise)(createStore)(globalReducers);
}

