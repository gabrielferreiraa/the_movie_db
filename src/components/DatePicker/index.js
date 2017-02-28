'use strict';

import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';

class Components extends Component{
  constructor () {
    super();
    let DateTimeFormat;

    if (areIntlLocalesSupported(['pt', 'pt-BR'])) {
      DateTimeFormat = global.Intl.DateTimeFormat;
    } else {
      const IntlPolyfill = require('intl');
      DateTimeFormat = IntlPolyfill.DateTimeFormat;
      require('intl/locale-data/jsonp/pt');
      require('intl/locale-data/jsonp/pt-BR');
    }

    this.state = {
      DateTimeFormat: DateTimeFormat,
      date: ''
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange (newDate) {
    this.setState({
      date: newDate
    });
  }

  render () {
    return (
      <DatePicker
        DateTimeFormat={this.state.DateTimeFormat}
        okLabel="OK"
        cancelLabel="Fechar"
        value={this.state.date}
        onChange={(e, newDate) => this._handleChange(newDate)}
        locale="pt"
      />
    );
  }
}

export default Components;
