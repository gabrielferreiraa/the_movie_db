'use strict';

import React, { PropTypes } from 'react';
import style from './css/SearchMovieList.css';
import { IMG_URL } from 'constants/configConstants';

const BoxMovie = ({ movie, handleDetail }) => (
  <div className={style.box} onClick={handleDetail} title={movie.original_title}>
    <img src={IMG_URL + movie.poster_path} className={style.imageFolder}/>
    <h2 className={style.movieTitle} title={movie.original_title}>
      {movie.original_title.length >= 25 ? `${movie.original_title.substring(0, 25)}...` : movie.original_title}
    </h2>
  </div>
);

BoxMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  handleDetail: PropTypes.func.isRequired
};

export default BoxMovie;
