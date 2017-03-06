'use strict';

import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import VMasker from 'vanilla-masker';

class Input extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: props.value
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange (mask, masked, e) {
    if(masked){
      const inputValue = VMasker.toPattern(e.target.value, mask);
      this.setState({ inputValue });
    } else {
      this.setState({ inputValue: e.target.value });
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      inputValue: nextProps.value
    });
  }

  render () {
    const { mask, name, label, masked, type } = this.props;

    return (
      <TextField
        name= { name }
        floatingLabelText= { label }
        value={this.state.inputValue}
        type={typeof type == 'undefined' ? 'text' : type}
        onChange={event => this._handleChange(mask, !!masked, event)}
      />
    );
  };
}

Input.propTypes = {
  mask: PropTypes.string,
  masked: PropTypes.boolean,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Input;