'use strict';

import { handleActions } from 'redux-actions';
import { NAME_CHANGED, MOVIE_SEARCHED, MOVIE_DETAIL } from 'constants/SearchMovieConstants';

const INITIAL_STATE = { name: 'Breaking Bad', list: [], currentMovie: [] };

const handlers = {
  [NAME_CHANGED]: (state, action) => ({ ...state, name: action.payload }),
  [MOVIE_SEARCHED]: (state, action) => ({ ...state, list: action.payload.data }),
  [MOVIE_DETAIL]: (state, action) => ({ ...state, currentMovie: action.payload })
};

export default handleActions(handlers, INITIAL_STATE);
