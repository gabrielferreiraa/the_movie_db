'use strict';

import axios from 'axios';
import { getToken } from 'utils/Auth';
import { ENDPOINT } from 'utils/constants';
import * as Alert from 'components/Alert';

export function callApi (method, entity, data = [], callback, fields = {}) {
  const fieldsRequest = fields ? '?fields=' + convertToURI(fields) : '';
console.log(ENDPOINT + entity + fieldsRequest);
  return axios({
    method: method,
    data: data,
    headers: {
      'Authorization': getToken()
    },
    url: ENDPOINT + entity + fieldsRequest
  }).then(function (e) {
    callback(e);
  }).catch(function (e) {
    try {
      const errors = JSON.parse(e.response.data.message);

      for (let key in errors) {
        Alert.error(errors[key]);
      }
    } catch (err) {
      Alert.error(e.response.data.message);
    }

    callback(e);
  });
}

function convertToURI (indicators) {
  const fields = [];
  for (let i in indicators) {
    fields.push(i);
  }

  return escape(fields.toString());
}