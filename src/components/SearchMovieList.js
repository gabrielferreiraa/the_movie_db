'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { movieDetail } from 'actions/SearchMovieListActions';
import { IMG_URL } from 'constants/configConstants';

class SearchMovieList extends Component {
  constructor (props) {
    super(props);

    this._renderMovies = this._renderMovies.bind(this);
  }

  _renderMovies () {
    const movies = this.props.list || [];

    return typeof movies.results === 'undefined' ? false : movies.results.map((movie, index) =>
      <div>
        <h2>{movie.original_title}</h2>
        <h3>Grade: {movie.vote_average}</h3>
        <small>{movie.overview}</small>
        <button onClick={() => this.props.movieDetail(movie)}>Detalhes</button>
        <hr/>
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
