'use strict';

import React, { Component } from 'react';
import TableGenerator from 'components/TableGenerator';
import SearchInputComp from 'components/SearchInputComponent';
import {Link} from 'react-router';
import { callApi } from 'utils/formActions';

class Participants extends Component {
  constructor () {
    super();
    this.state = {
      result: [],
      resultInternal: []
    };

    this.getResultFiltered = this.getResultFiltered.bind(this);
  }

  getResultFiltered (data) {
    this.setState({
      result: data
    });
  }

  componentDidMount(){
    callApi('GET', 'participants', [], (e, status) => {
      if (status === 'success') {
        this.setState({
          result: e.data,
          resultInternal: e.data
        });
      } else {
        console.log(e);
      }
    });
  }

  render () {
    const keysToFilters = ['name', 'cpf'];
    const indicators = ['ID', 'Nome', 'CPF', 'Adicionado em', 'Ações'];
    const data = this.state.result;

    return (
      <div>
        <span>Aplicação / Participantes</span>
        <Link to='/participants/form'>
          <button>Cadastro de Participantes</button>
        </Link>
        <SearchInputComp
          getResultFiltered={this.getResultFiltered}
          data={this.state.resultInternal}
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
