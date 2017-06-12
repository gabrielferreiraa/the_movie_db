'use strict';

import { handleActions } from 'redux-actions';
import { NAME_CHANGED, MOVIE_SEARCHED } from 'constants/SearchMovieConstants';

const INITIAL_STATE = {
  name: 'Breaking Bad', list: []
};

const handlers = {
  [NAME_CHANGED]: (state, action) => ({ ...state, name: action.payload }),
  [MOVIE_SEARCHED]: (state, action) => ({ ...state, list: action.payload.data })
};

export default handleActions(handlers, INITIAL_STATE);
