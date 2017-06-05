'use strict';

export const changeValue = e => ({
    type: 'VALUE_CHANGED',
    payload: e.target.value
});

