'use strict'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import style from './css/SearchMovieList'

import BoxMovie from './BoxMovie'
import { movieDetail } from 'actions/SearchMovieListActions'

class SearchMovieList extends Component {
  constructor (props) {
    super(props)

    this._renderMovies = this._renderMovies.bind(this)
  }

  _renderMovies () {
    const movies = this.props.list || []

    return typeof movies.results === 'undefined' ? false : movies.results.map((movie, index) =>
      <BoxMovie
        key={index}
        movie={movie}
        handleDetail={() => this.props.movieDetail(movie)}
      />
    )
  }

  render () {
    return (
      <div className={style.moviesSection}>
        {this._renderMovies()}
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.app.list })
const mapDispatchToProps = dispatch => bindActionCreators({ movieDetail }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieList)
