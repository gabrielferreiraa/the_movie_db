'use strict';

import React, { PropTypes } from 'react';
import style from './css/closeButton.css';

const CloseButton = ({ handleClick }) => (
  <button
    type='button'
    onClick={handleClick}
    title='Close'
    className={style.closeButton} />
);

CloseButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default CloseButton;
