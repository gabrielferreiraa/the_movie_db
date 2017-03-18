'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddButton from './index';
import { storiesOf } from '@kadira/storybook';

storiesOf('AddButton', module)
  .add('Button', () => (
    <MuiThemeProvider>
      <AddButton route='route' labelName='Cadastrar Participante'/>
    </MuiThemeProvider>
  ));
