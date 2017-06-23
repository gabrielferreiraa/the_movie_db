'use strict';

import React from 'react';
import SearchMovieForm from 'components/SearchMovieForm';
import SearchMovieList from 'components/SearchMovieList';
import AsideDetails from 'components/AsideDetails';

const App = () => (
  <div>
    <SearchMovieForm />
    <SearchMovieList />
    <AsideDetails />
  </div>
);

export default App;
