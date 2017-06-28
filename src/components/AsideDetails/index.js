'use strict';

import React  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closedAside } from 'actions/AsideDetailsActions';
import { IMG_URL } from 'constants/configConstants';
import ContentDetail from 'components/AsideDetails/ContentDetail';

import style from './css/AsideDetails.css';

const AsideDetails = (props) => {
  const currentMovie = props.currentMovie || {};

  return (
    <aside
      className={[
        style.asideDetails,
        props.open ? style.opened : false
      ].join(' ')}>
      <img src={IMG_URL + currentMovie.backdrop_path} className={style.backgroundBlur}/>
      <ContentDetail
        currentMovie={currentMovie}
        closedAside={props.closedAside}
      />
    </aside>
  );
};

const mapStateToProps = state => ({
  open: state.app.open,
  currentMovie: state.app.currentMovie
});
const mapDispatchToProps = dispatch => bindActionCreators({ closedAside }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AsideDetails);
