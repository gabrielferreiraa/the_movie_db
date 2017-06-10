'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { nameChanged, add } from 'actions/SearchMovieFormActions';

class SearchMovieForm extends Component {
  constructor (props) {
    super(props);

    this._handleKeyUp = this._handleKeyUp.bind(this);
  }

  _handleKeyUp (e) {
    return e.keyCode === 13 ? this.props.add() : false;
  }

  render () {
    return (
      <div>
        <input type='text' onChange={this.props.nameChanged} onKeyUp={this._handleKeyUp} value={this.props.name} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ name: state.app.name });
const mapDispatchToProps = dispatch => bindActionCreators({ nameChanged, add }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieForm);
