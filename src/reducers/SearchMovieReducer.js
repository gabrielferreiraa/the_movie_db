'use strict';

import { NAME_CHANGED, MOVIE_SEARCHED } from 'constants/SearchMovieConstants';

const INITIAL_STATE = {
  name: 'Breaking Bad', list: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case MOVIE_SEARCHED:
      return { ...state, list: action.payload.data };
    default:
      return state;
  }
};
