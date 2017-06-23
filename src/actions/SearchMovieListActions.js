'use strict';

import axios from 'axios';
import { MOVIE_DETAILS_URL } from 'constants/configConstants';
import { MOVIE_DETAIL } from 'constants/SearchMovieConstants';

export const movieDetail = movie => {
  const details = axios.get(`${MOVIE_DETAILS_URL.replace(':movie_id:', movie.id)}`);

  return {
    type: MOVIE_DETAIL,
    payload: details
  }
};
