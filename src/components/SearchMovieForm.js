'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { nameChanged, movieSearched } from 'actions/SearchMovieFormActions';

class SearchMovieForm extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <input type='text' onChange={this.props.nameChanged} value={this.props.name}/>
        <button onClick={() => this.props.movieSearched(this.props.name)}>Buscar</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ name: state.app.name });
const mapDispatchToProps = dispatch => bindActionCreators({ nameChanged, movieSearched }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieForm);
