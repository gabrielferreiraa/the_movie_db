import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

class LeftDrawer extends Component {
  render () {
    const style = {
      bg: {
        backgroundColor: '#333'
      },
      user: {
        textAlign: 'center',
        fontFamily: 'Roboto'
      },
      link: {
        textDecoration: 'none'
      }
    };

    return (
      <Drawer
        docked={true}
        open={this.props.open}
        style={style.bg}>
        <div>
          <h4 style={style.user}>Usuário Online</h4>
        </div>
        <div>
          {this.props.menus.map((menu, index) =>
            <Link to={menu.link} key={menu.id} style={style.link}>
              <MenuItem
                primaryText={menu.text}
                leftIcon={
                  <i className='material-icons' style={{ color: '#89949B' }}>{menu.icon}</i>
                }
              />
            </Link>
          )}
          <MenuItem
            primaryText='Configurações'
            rightIcon={<ArrowDropRight />}
            leftIcon={<i className='material-icons' style={{ color: '#89949B' }}>settings</i>}
            menuItems={[
              <MenuItem
                primaryText='Menu 1'
                rightIcon={<i className='material-icons' style={{ color: '#89949B' }}>room</i>} />,
              <MenuItem
                primaryText='Menu 2'
                rightIcon={<i className='material-icons' style={{ color: '#89949B' }}>account_circle</i>} />,
              <MenuItem
                primaryText='Menu 3'
                rightIcon={<i className='material-icons' style={{ color: '#89949B' }}>build</i>} />
            ]}
          />
        </div>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  open: PropTypes.bool.isRequired
};

export default LeftDrawer;
