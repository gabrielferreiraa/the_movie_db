'use strict';

import { CLOSED_ASIDE } from 'constants/SearchMovieConstants';

export const closedAside = movie => ({
  type: CLOSED_ASIDE,
  payload: false
});
