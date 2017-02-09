'use strict';

import React, { Component } from 'react';
import TableGenerator from 'components/TableGenerator';
import Data from 'src/data';
import SearchInputComp from 'components/SearchInputComponent';

class Participants extends Component {
  constructor () {
    super();
    this.state = {
      result: Data.participants
    };

    this.getResultFiltered = this.getResultFiltered.bind(this);
  }

  getResultFiltered (data) {
    this.setState({
      result: data
    });
  }

  render () {
    const keysToFilters = ['name', 'role'];
    const indicators = ['ID', 'Nome', 'Cargo', 'Status', 'Ações'];
    const data = this.state.result;

    return (
      <div>
        <span>Aplicação / Participantes</span>
        <SearchInputComp
          getResultFiltered={this.getResultFiltered}
          data={Data.participants}
          keysToFilters={keysToFilters}
          placeholder='Pesquisa de Participantes'
          fields='Nome ou Cargo'
        />
        <TableGenerator indicators={indicators} data={data} router="participants" />
      </div>
    );
  }
}

export default Participants;
