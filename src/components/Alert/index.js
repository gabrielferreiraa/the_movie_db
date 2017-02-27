'use strict';

import React from 'react';

export function success (text) {
  msg.show(text, {
    type: 'success',
    icon: <i className="material-icons" style={{ color: '#2ecc71' }}>check</i>
  });
}

export function error (text) {
  msg.show(text, {
    type: 'error',
    icon: <i className="material-icons" style={{ color: '#e74c3c' }}>error</i>
  });
}

export function remove () {
  msg.removeAll();
}
