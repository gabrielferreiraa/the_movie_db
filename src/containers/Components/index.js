'use strict';

import React, { Component } from 'react';
import DatePicker from 'components/DatePicker';
import Input from 'components/Input';

class Components extends Component {
  render () {
    return (
      <div>
        <DatePicker />
        <Input mask="999.999.999-99" name="Data" label="Data de Nascimento" />
      </div>
    );
  }
}

export default Components;
