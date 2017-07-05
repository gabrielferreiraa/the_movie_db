'use strict'

import React, { PropTypes } from 'react'
import style from './css/SearchMovieList'
import { IMG_URL } from 'constants/configConstants'

const BoxMovie = ({ movie, handleDetail }) => {
  const handleError = e => {
    e.target.src = 'http://bit.ly/2sq9TOE'
  }

  return (
    <div className={style.box} onClick={handleDetail} title={movie.original_title}>
      <img src={IMG_URL + movie.poster_path} className={style.imageFolder} onError={handleError} />
      <h2 className={style.movieTitle} title={movie.original_title}>
        {movie.original_title.length >= 25 ? `${movie.original_title.substring(0, 25)}...` : movie.original_title}
      </h2>
    </div>
  )
}

BoxMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  handleDetail: PropTypes.func.isRequired
}

export default BoxMovie
