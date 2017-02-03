'use strict';

import React, { PropTypes } from 'react';
import SearchInput, { createFilter } from 'utils/smartSearch';

const SearchInputComponent = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    };
  },

  getEntityResult () {
    return this.result;
  },

  setEntityResult (result) {
    this.result = result;
  },

  render () {
    const { placeholder, fields, keysToFilters } = this.props;
    this.setEntityResult(this.props.data.filter(createFilter(this.state.searchTerm, keysToFilters)));
    return (
      <SearchInput
        className='search-input'
        namePlaceholder={ placeholder }
        fields={ fields }
        onChange={this.searchUpdated}
      />
    );
  },

  searchUpdated (term) {
    this.setState({
      searchTerm: term
    });
    this.props.getResultFiltered(this.getEntityResult());
  }
});

SearchInputComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  fields: PropTypes.string.isRequired,
  keysToFilters: PropTypes.array.isRequired,
  getResultFiltered: PropTypes.func.isRequired
};


export default SearchInputComponent;