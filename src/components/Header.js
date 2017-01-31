import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { grey800, white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
  render () {
    const bgApp = {
      bg: {
        backgroundColor: grey800,
        fontFamily: 'Roboto',
        position: 'fixed',
        top: 0,
        overflow: 'hidden'
      }
    };

    const { styles, handleChangeDrawer } = this.props;

    return (
      <AppBar
        style={{...styles, ...bgApp.bg}}
        iconElementLeft={
          <IconButton onClick={handleChangeDrawer}>
            <Menu color={white} />
          </IconButton>
        }
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
          <Link to='/login'>
            <MenuItem primaryText='Sair' rightIcon={<i className='material-icons' style={{color: '#89949B'}}>exit_to_app</i>} />
          </Link>
          </IconMenu>
        }
        title='Painel' />
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeDrawer: PropTypes.func.isRequired
};

export default Header;
