'use strict';

import { MOVIE_DETAIL } from 'constants/SearchMovieConstants';

export const movieDetail = movie => ({
  type: MOVIE_DETAIL,
  payload: movie
});
