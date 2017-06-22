'use strict';

import React from 'react';
import SearchMovieForm from 'components/SearchMovieForm';
import SearchMovieList from 'components/SearchMovieList';
import SearchMovieDetails from 'components/SearchMovieDetails';

const App = () => (
  <div>
    <SearchMovieForm />
    <SearchMovieList />
    <SearchMovieDetails />
  </div>
);

export default App;
