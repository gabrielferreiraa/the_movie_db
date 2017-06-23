'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { movieDetail } from 'actions/SearchMovieListActions';
import { IMG_URL } from 'constants/configConstants';
import { splitDate } from 'utils';
import style from './css/SearchMovieForm.css';

class SearchMovieList extends Component {
  constructor (props) {
    super(props);

    this._renderMovies = this._renderMovies.bind(this);
  }

  _renderMovies () {
    const movies = this.props.list || [];

    return typeof movies.results === 'undefined' ? false : movies.results.map((movie, index) =>
      <div key={index} className={style.box}>
        <h2>{movie.original_title}</h2>
        <h3>Grade: {movie.vote_average}</h3>
        <h3>{splitDate(movie.release_date, 0)}</h3>
        <img src={IMG_URL + movie.poster_path} className={style.imageFolder} />
        <button onClick={() => this.props.movieDetail(movie)}>Detalhes</button>
      </div>
    );
  }

  render () {
    return (
      <div>
        {this._renderMovies()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.app.list });
const mapDispatchToProps = dispatch => bindActionCreators({ movieDetail }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieList);
