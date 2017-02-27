'use strict';

import axios from 'axios';
import { getToken } from 'utils/Auth';
import { ENDPOINT } from 'utils/constants';

export function callApi (method, entity, data = [], callback, fields = []) {
  return axios({
    method: method,
    data: data,
    headers: {
      'Authorization': getToken()
    },
    url: ENDPOINT + entity
  }).then(function (e) {
    callback(e.data, 'success');
  }).catch(function (e) {
    callback(e, 'error');
  });
}
