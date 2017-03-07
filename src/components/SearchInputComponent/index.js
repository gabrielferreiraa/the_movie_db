'use strict';

import React, { Component, PropTypes } from 'react';
import SearchInput, { createFilter } from 'utils/smartSearch';

class SearchInputComponent extends Component {
  constructor () {
    super();
    this.state = {
      searchTerm: '',
      filteredResult: []
    };

    this.setStateResult = this.setStateResult.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  setStateResult () {
    const { keysToFilters, data } = this.props;
    const result = data.filter(createFilter(this.state.searchTerm, keysToFilters));

    this.setState({
      filteredResult: result
    });
  }

  componentWillMount () {
    this.setStateResult();
  }

  render () {
    const { placeholder } = this.props;

    return (
      <SearchInput
        className='search-input'
        namePlaceholder={placeholder}
        onChange={this.searchUpdated}
      />
    );
  }

  searchUpdated (term) {
    this.setState({
      searchTerm: term
    });
    this.setStateResult();
    this.props.getResultFiltered(this.state.filteredResult);
  }
}

SearchInputComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  keysToFilters: PropTypes.array.isRequired,
  getResultFiltered: PropTypes.func.isRequired
};

export default SearchInputComponent;
