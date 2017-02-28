'use strict';

import * as Alert from 'components/Alert';
import axios from 'axios';
import { hashHistory } from 'react-router';
import { URL_LOGIN } from 'utils/constants';

/**
 * Auth user login
 * @param method
 * @param data
 * @returns {Promise.<T>|Promise<R>}
 */
function authUser (method, data = []) {
  return axios({
    method: method,
    data: data,
    url: URL_LOGIN
  });
}

/**
 * Make request login
 * @param email
 * @param password
 */
export async function signIn (email, password) {
  const formData = {
    email: email,
    password: password
  };

  try {
    const result = await authUser('POST', formData);
    if (typeof result.data !== 'undefined') {
      if (typeof result.data === 'object') {
        Alert.success('Login realizado com sucesso');
        saveToken(result.data.data.token);
        setTimeout(() => { hashHistory.push('/dashboard'); }, 2000);
      } else {
        Alert.error('Não foi possível realizar o login');
      }
    } else {
      Alert.error('Não foi possível realizar o login');
    }
  } catch (err) {
    Alert.error('Não foi possível realizar o login');
  }
}

/**
 * Logout and remove token
 */
export function signOut () {
  removeToken();
  hashHistory.push('/login');
}

/**
 * Save token on localStorage
 * @param token
 */
export function saveToken (token) {
  if (!window.localStorage) {
    throw new Error('No storage support!');
  }

  window.localStorage.setItem('token', token);
}

/**
 * Remove token
 */
export function removeToken () {
  window.localStorage.removeItem('token');
}

/**
 * Return token
 * @returns {boolean}
 */
export function getToken () {
  return window.localStorage.getItem('token') || false;
}

/**
 * Require user has been logged
 * @param nextState
 * @param replace
 * @returns {*}
 */
export function requireAuth (nextState, replace) {
  if (getToken()) {
    return;
  }

  return replace({
    pathname: '/login',
    state: {
      nextPathname: nextState.location.pathname
    }
  });
}
