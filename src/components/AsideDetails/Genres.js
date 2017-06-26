'use strict';

import React from 'react';

import { closedAside } from 'actions/AsideDetailsActions';
import style from './css/AsideDetails.css';

const renderGenres = genres => (
  <div className={style.genres}>
    {typeof genres !== 'undefined' ? genres.map((item, index) => (
      <span key={item.id}>{item.name}</span>
    )) : false}
  </div>
);

const Genres = ({ genres }) => renderGenres(genres);

export default Genres;
