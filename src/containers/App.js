import React, { Component } from 'react';
import Header from 'components/Header';
import LeftDrawer from 'components/LeftDrawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Data from '../data';

class App extends Component {
  constructor () {
    super();
    this.state = {
      open: true
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
    const currentRoute = this.props.location.pathname;

    return (
      <MuiThemeProvider>
        <div>
          <Header handleChangeDrawer={this.handleChangeDrawer} styles={styles.header} drawerOpen={drawerOpen} />
          <LeftDrawer open={drawerOpen} menus={Data.menus} currentRoute={currentRoute} />
          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
