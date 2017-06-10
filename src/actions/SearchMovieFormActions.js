'use strict';

export const nameChanged = e => ({
  type: 'NAME_CHANGED',
  payload: e.target.value
});

export const add = () => ({
  type: 'ADD'
});