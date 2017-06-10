'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { itemRemove } from 'actions/SearchMovieListActions';

class SearchMovieList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const list = this.props.list || [];
    return (
      <div>
        <ul>
          {list.map((item, index) =>
            <li key={index}>
              {item.name}
              <a href='#' onClick={() => this.props.itemRemove(item)} >X</a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.app.list });
const mapDispatchToProps = dispatch => bindActionCreators({ itemRemove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieList);
