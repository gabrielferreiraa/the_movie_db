'use strict';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = 'd02655ab95c478b5dfd0168cfd753279';

export const API_URL = `${BASE_URL}3/search/movie?api_key=${API_KEY}`;
export const IMG_URL = 'http://image.tmdb.org/t/p/w300';
export const DEV_TOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
