'use strict';

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Header from './index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const bgApp = {
  bg: {
    backgroundColor: '#333',
    fontFamily: 'Roboto',
    position: 'fixed',
    top: 0,
    overflow: 'hidden'
  },
  bt: {
    backgroundColor: '#E76049',
    color: '#fff',
    marginRight: drawerOpen ? 255 : 2.5
  },
  icon: {
    transform: drawerOpen ? 'rotate(90deg)' : 'rotate(0)'
  }
};

storiesOf('Header', module)
  .add('aberto', () => (
    <MuiThemeProvider>
      <Header handleChangeDrawer={action('Open the Header')} drawerOpen={true}/>
    </MuiThemeProvider>
  ))
  .add('fechado', () => (
    <MuiThemeProvider>
      <Header handleChangeDrawer={action('Open the Header')} drawerOpen={false}/>
    </MuiThemeProvider>
  ));