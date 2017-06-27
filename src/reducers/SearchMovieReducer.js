'use strict';

import { handleActions } from 'redux-actions';
import { NAME_CHANGED, MOVIE_SEARCHED, MOVIE_DETAIL, CLOSED_ASIDE } from 'constants/SearchMovieConstants';

const INITIAL_STATE = { name: 'Avengers', list: [], currentMovie: [], open: false };

const handlers = {
  [NAME_CHANGED]: (state, action) => ({ ...state, name: action.payload, open: false }),
  [MOVIE_SEARCHED]: (state, action) => ({ ...state, list: action.payload.data, open: false }),
  [MOVIE_DETAIL]: (state, action) => ({ ...state, currentMovie: action.payload.data, open: true }),
  [CLOSED_ASIDE]: (state, action) => ({ ...state, open: action.payload })
};

export default handleActions(handlers, INITIAL_STATE);
