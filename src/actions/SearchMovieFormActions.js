'use strict';

import axios from 'axios';
import { API_URL } from 'constants/configConstants';
import { MOVIE_SEARCHED, NAME_CHANGED } from 'constants/SearchMovieConstants';

export const movieSearched = name => {
  const movies = axios.get(`${API_URL}&query=${name}`);

  return {
    type: MOVIE_SEARCHED,
    payload: movies
  }
};

export const nameChanged = e => ({ type: NAME_CHANGED, payload: e.target.value });