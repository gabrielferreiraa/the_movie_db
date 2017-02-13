'use strict';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import style from './css/left-drawer.css';

class LeftDrawer extends Component {
  render () {
    return (
      <Drawer
        docked={true}
        open={this.props.open}
        className={style.background}>
        <div>
          <h4 className={style.userOnline}>Usuário Online</h4>
        </div>
        <div>
          <List>
            <Subheader>Nested List Items</Subheader>
            {this.props.menus.map((menu, index) =>
              <Link to={menu.link} key={menu.id} className={style.link}>
                <ListItem
                  primaryText={menu.text}
                  key={index}
                  leftIcon={
                    <i className='material-icons' style={{ color: '#89949B' }}>{menu.icon}</i>
                  }
                />
              </Link>
            )}
            <ListItem
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedListStyle={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}
                />,
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
