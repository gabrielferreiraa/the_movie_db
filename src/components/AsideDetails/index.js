'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { closedAside } from 'actions/AsideDetailsActions';
import Genres from 'components/AsideDetails/Genres';

import { IMG_URL } from 'constants/configConstants';
import style from './css/AsideDetails.css';

class SearchMovieList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const currentMovie = this.props.currentMovie || {};

    return (
      <aside
        className={[
          style.asideDetails,
          this.props.open ? style.opened : false
        ].join(' ')}>
        <button onClick={() => this.props.closedAside()}>X</button>
        <img src={IMG_URL + currentMovie.backdrop_path} className={style.backdropImage}/>
        <h1 className={style.movieTitle}>{currentMovie.original_title}</h1>
        <small>{currentMovie.overview}</small>
        <Genres genres={currentMovie.genres} />
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  open: state.app.open,
  currentMovie: state.app.currentMovie
});
const mapDispatchToProps = dispatch => bindActionCreators({ closedAside }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieList);
