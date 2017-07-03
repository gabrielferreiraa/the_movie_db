'use strict';

import React, { PropTypes } from 'react';
import { splitDate } from 'utils';
import style from './css/AsideDetails';

const Descriptive = (props) => {
  const { title, description, date } = props;

  return (
    <div className={style.description}>
      <h1 className={style.movieTitle}>{title}</h1>
      <h5 className={style.year}>{splitDate(String(date), 0)}</h5>
      <small className={style.description}>{description}</small>
    </div>
  );
};

Descriptive.defaultProps = {
  title: "Don't have a Title",
  description: "Don't have a Description"
};

Descriptive.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Descriptive;
