'use strict';

import React, { Component } from 'react';
import AlertContainer from 'react-alert';

class Alert extends Component {
  constructor () {
    super();
    this.alertOptions = {
      offset: 14,
      position: 'bottom right',
      theme: 'dark',
      time: 5000,
      transition: 'fade'
    }
  }

  showAlert () {
    console.log(this.props);
    return msg.show(this.props.text, {
      time: 2000,
      type: this.props.type
    });
  }

  render () {
    return (
      <AlertContainer
        ref={(a) => global.msg = a}
        {...this.alertOptions}
      />
    )
  }
}

export default Alert;