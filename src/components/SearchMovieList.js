'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { itemRemove } from 'actions/SearchMovieListActions';

class SearchMovieList extends Component {
  constructor (props) {
    super(props);

    this._renderMovies = this._renderMovies.bind(this);
  }

  _renderMovies () {
    const movies = this.props.list || [];

    return typeof movies.results === 'undefined' ? false : movies.results.map((movie, index) =>
      <li key={index}>
        {movie.original_title}
      </li>
    );
  }

  render () {
    return (
      <div>
        <ul>
          {this._renderMovies()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.app.list });
const mapDispatchToProps = dispatch => bindActionCreators({ itemRemove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieList);
