'use strict';

import React, { PropTypes } from 'react';
import style from './css/SearchMovieList.css';
import { IMG_URL } from 'constants/configConstants';
import { splitDate } from 'utils';
import { fontFamilyBold } from 'dist/css/default.css';

const BoxMovie = ({ movie, handleDetail }) =>
  <div className={style.box}>
    <img src={IMG_URL + movie.poster_path} className={style.imageFolder}/>
    <button onClick={handleDetail} className={style.btnShowMore}>SHOW MORE</button>
    <h2 className={fontFamilyBold}>{movie.original_title.toUpperCase()}</h2>
    <h3>Grade: {movie.vote_average}</h3>
    <h3>{splitDate(movie.release_date, 0)}</h3>
  </div>;

BoxMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  handleDetail: PropTypes.func.isRequired
};

export default BoxMovie;