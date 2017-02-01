import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { grey800, white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/svg-icons/navigation/menu';

class Header extends Component {
  render () {
    const { styles, handleChangeDrawer, drawerOpen } = this.props;

    const bgApp = {
      bg: {
        backgroundColor: grey800,
        fontFamily: 'Roboto',
        position: 'fixed',
        top: 0,
        overflow: 'hidden'
      },
      bt: {
        backgroundColor: '#E76049',
        color: '#fff',
        marginRight: drawerOpen ? 255 : 2.5
      }
    };

    return (
      <AppBar
        style={{ ...styles, ...bgApp.bg }}
        iconElementLeft={
          <IconButton onClick={handleChangeDrawer}>
            <Menu color={white}/>
          </IconButton>
        }
        iconElementRight={
          <Link to='/login'>
            <IconButton
              style={bgApp.bt}
            >
              <i className='material-icons' style={{ color: '#89949B' }}>exit_to_app</i>
            </IconButton>
          </Link>
        }
        title='Painel'/>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeDrawer: PropTypes.func.isRequired
};

export default Header;
