'use strict';

import React, { Component } from 'react';
import { signOut } from 'utils/Auth';
import Header from 'components/Header';
import LeftDrawer from 'components/LeftDrawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AlertContainer from 'react-alert';
import Data from '../data';

class App extends Component {
  constructor () {
    super();
    this.state = {
      open: true
    };

    this.alertOptions = {
      offset: 14,
      position: 'bottom right',
      theme: 'dark',
      time: 5000,
      transition: 'fade'
    };

    this.handleChangeDrawer = this.handleChangeDrawer.bind(this);
  }

  handleChangeDrawer () {
    this.setState({
      open: !this.state.open
    });
  }

  render () {
    const drawerOpen = this.state.open;
    const marginLeft = 250;

    const styles = {
      header: {
        marginLeft: drawerOpen ? marginLeft : -5
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: drawerOpen ? marginLeft : 25,
        transition: 'all 200ms ease'
      }
    };

    return (
      <MuiThemeProvider>
        <div>
          <Header
            handleChangeDrawer={this.handleChangeDrawer}
            styles={styles.header}
            drawerOpen={drawerOpen}
            handleLogout={signOut}
          />
          <LeftDrawer open={drawerOpen} menus={Data.menus} />
          <div style={styles.container}>
            {this.props.children}
          </div>
          <AlertContainer
            ref={(a) => global.msg = a}
            {...this.alertOptions}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
