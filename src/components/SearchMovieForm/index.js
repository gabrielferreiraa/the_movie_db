'use strict'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import style from './css/SearchMovieForm'

import { nameChanged, movieSearched } from 'actions/SearchMovieFormActions'

class SearchMovieForm extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.movieSearched()
  }

  render () {
    return (
      <div>
        <h1 className={style.title}>THE MOVIE DB</h1>
        <div className={style.inputGroup}>
          <input type='text' onChange={this.props.nameChanged} value={this.props.name} title='Press Enter' placeholder='Populars' />
          <button onClick={() => this.props.movieSearched(this.props.name)} className={style.btnSearch}>
            <i className='fa fa-search' />
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ name: state.app.name })
const mapDispatchToProps = dispatch => bindActionCreators({ nameChanged, movieSearched }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieForm)
