'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemRemove } from 'actions/SearchMovieListActions';
import { IMG_URL } from 'constants/configConstants';

class SearchMovieList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const currentMovie = this.props.currentMovie;

    return (
      <aside>
        <h1>{currentMovie.original_title}</h1>
      </aside>
    );
  }
}

const mapStateToProps = state => ({ currentMovie: state.app.currentMovie });
export default connect(mapStateToProps)(SearchMovieList);
