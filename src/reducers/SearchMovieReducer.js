'use strict';

import { NAME_CHANGED, ITEM_REMOVED, ADD } from 'constants/SearchMovieConstants';

const INITIAL_STATE = {
  name: 'Breaking Bad', list: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case ITEM_REMOVED:
      return { ...state, list: state.list.filter(item => item.name !== action.payload.name) };
    case ADD:
      const newList = state.list.concat({ name: state.name });
      return { ...state, list: newList };
    default:
      return state;
  }
};
