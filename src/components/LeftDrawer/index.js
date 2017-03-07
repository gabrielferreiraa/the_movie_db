'use strict';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import style from './left-drawer.css';

class LeftDrawer extends Component {
  render () {
    return (
      <Drawer
        docked={true}
        open={this.props.open}
        className={style.background}>
        <div>
          <List>
            <Subheader>Nested List Items</Subheader>
            {this.props.menus.map((menu, index) =>
              <Link to={menu.link} key={menu.id} className={style.link}>
                <ListItem
                  primaryText={menu.text}
                  key={index}
                  leftIcon={
                    <i className='material-icons' style={{ color: '#98a6ad' }}>{menu.icon}</i>
                  }
                />
              </Link>
            )}
            <ListItem
              primaryText='Inbox'
              leftIcon={<i className='material-icons' style={{ color: '#98a6ad' }}>security</i>}
              initiallyOpen={false}
              nestedListStyle={{ marginLeft: '35px' }}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText='Starred'
                />,
                <ListItem
                  key={2}
                  primaryText='Menu'
                />
              ]}
            />

          </List>
        </div>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  open: PropTypes.bool.isRequired
};

export default LeftDrawer;
