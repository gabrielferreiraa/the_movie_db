'use strict';

import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { green600, white } from 'material-ui/styles/colors';
import { LIGHT } from 'utils/constants';

const AddButton = ({ router, labelName }) => {
  return (
    <Link to={`/${router}/form`}>
      <RaisedButton
        label={labelName}
        backgroundColor={green600}
        labelColor={white}
        buttonStyle={{ fontFamily: LIGHT }}
        style={{ float: 'right', textDecoration: '' }}
        icon={<i className='material-icons' style={{ color: '#FFF' }}>add</i>}
      />
    </Link>
  );
};

export default AddButton;