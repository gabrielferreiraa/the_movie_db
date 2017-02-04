'use strict';

import React, { Component, PropTypes } from 'react';
import SearchInput, { createFilter } from 'utils/smartSearch';

// const SearchInputComponent = React.createClass({
//   getInitialState () {
//     return {
//       searchTerm: ''
//     };
//   },
//
//   getEntityResult () {
//     return this.result;
//   },
//
//   setEntityResult (result) {
//     this.result = result;
//   },
//
//   render () {
//     const { placeholder, fields, keysToFilters, data } = this.props;
//     this.setEntityResult(data.filter(createFilter(this.state.searchTerm, keysToFilters)));
//     return (
//       <SearchInput
//         className='search-input'
//         namePlaceholder={ placeholder }
//         fields={ fields }
//         onChange={this.searchUpdated}
//       />
//     );
//   },
//
//   searchUpdated (term) {
//     this.setState({
//       searchTerm: term
//     });
//     this.props.getResultFiltered(this.getEntityResult());
//   }
// });

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

  setStateResult (result) {
    return (e) => {
      this.setState({
        filteredResult: result
      });
    }
  }

  render () {
    const { placeholder, fields, keysToFilters, data } = this.props;

    this.setStateResult(data.filter(createFilter(this.state.searchTerm, keysToFilters)));
    return (
      <SearchInput
        className='search-input'
        namePlaceholder={ placeholder }
        fields={ fields }
        onChange={this.searchUpdated}
      />
    );
  }

  searchUpdated (term) {
    this.setState({
      searchTerm: term
    });
    this.props.getResultFiltered(this.state.filteredResult);
  }
}

SearchInputComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  fields: PropTypes.string.isRequired,
  keysToFilters: PropTypes.array.isRequired,
  getResultFiltered: PropTypes.func.isRequired,
};


export default SearchInputComponent;