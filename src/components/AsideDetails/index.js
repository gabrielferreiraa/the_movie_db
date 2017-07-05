'use strict'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { closedAside } from 'actions/AsideDetailsActions'
import { IMG_URL } from 'constants/configConstants'
import ContentDetail from 'components/AsideDetails/ContentDetail'

import style from './css/AsideDetails'

const AsideDetails = (props) => {
  const currentMovie = props.currentMovie || {}

  const handleError = e => {
    e.target.src = 'http://selnd.com/2tziEWH'
  }

  return (
    <aside
      className={[
        style.asideDetails,
        props.open ? style.opened : false
      ].join(' ')}>
      <img src={IMG_URL + currentMovie.backdrop_path} className={style.backgroundBlur} onError={handleError} />
      <ContentDetail
        currentMovie={currentMovie}
        closedAside={props.closedAside}
        handleError={handleError}
      />
      <small className={style.avarage}>
        {`${currentMovie.vote_average}/10`}
        <i className='fa fa-star' style={{ color: 'yellow' }} />
      </small>
      <small className={style.avarage}>
        {`${currentMovie.vote_count} reviews`}
      </small>
      {currentMovie.homepage && <a href={currentMovie.homepage} target='_blank' className={style.visitHomePage}>
        <i className='fa fa-desktop ' />
        Visit Home Page
      </a>}
    </aside>
  )
}

const mapStateToProps = state => ({
  open: state.app.open,
  currentMovie: state.app.currentMovie
})
const mapDispatchToProps = dispatch => bindActionCreators({ closedAside }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AsideDetails)
