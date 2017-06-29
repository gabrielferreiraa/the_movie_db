'use strict';

import React from 'react';
import SearchMovieForm from 'components/SearchMovieForm';
import SearchMovieList from 'components/SearchMovieList';
import AsideDetails from 'components/AsideDetails';
import ForkMeGithub from 'components/ForkMeGithub';

const App = () => (
  <div>
    <SearchMovieForm />
    <SearchMovieList />
    <AsideDetails />
    <ForkMeGithub />
  </div>
);

export default App;
