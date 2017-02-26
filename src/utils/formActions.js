'use strict';

import React from 'react';
import axios from 'axios';

export function authUser (method, entity, data = [], callback, fields = []) {
  return axios({
    method: method,
    data: data,
    url: 'http://ec2-54-234-232-133.compute-1.amazonaws.com/api/v1/' + entity
  }).then(function (e) {
    callback(e.data, 'success');
  }).catch(function (e) {
    callback(e, 'error');
  });
}

export function callApi(method, entity, data = [], callback, fields = []) {
  return axios({
    method: method,
    data: data,
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    url: 'http://ec2-54-234-232-133.compute-1.amazonaws.com/api/v1/' + entity
  }).then(function (e) {
    callback(e.data, 'success');
  }).catch(function (e) {
    callback(e, 'error');
  });
}