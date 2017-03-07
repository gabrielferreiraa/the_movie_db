'use strict';

import React from 'react';

const Icon = ({ icon, ...styles }) => (
  <i className='material-icons' style={{ ...styles }}>{ icon }</i>
);

export default Icon;