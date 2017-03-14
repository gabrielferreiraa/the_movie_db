'use strict';

import React, { Component } from 'react';
import TableGenerator from 'components/TableGenerator';
import SearchInputComp from 'components/SearchInputComponent';
import { callApi } from 'utils/formActions';
import AddButton from 'components/AddButton';

class Participants extends Component {
  constructor () {
    super();
    this.state = {
      result: [],
      resultInternal: [],
      indicators: {
        'id': 'ID',
        'name': 'Nome',
        'cpf': 'CPF',
        'createdAt': 'Adicionado em'
      }
    };

    this.getResultFiltered = this.getResultFiltered.bind(this);
  }

  getResultFiltered (data) {
    this.setState({
      result: data
    });
  }

  componentDidMount () {
    callApi('GET', 'participants', [], (e, status) => {
      if (e.status === 200) {
        this.setState({
          result: e.data.data.data,
          resultInternal: e.data.data.data
        });
      } else {
        console.log(e);
      }
    }, this.state.indicators);
  }

  render () {
    const keysToFilters = ['name', 'cpf'];
    const data = this.state.result;

    return (
      <div>
        <span>Aplicação / Participantes</span>
        <AddButton router='participants' labelName='Cadastrar Participante' />
        <SearchInputComp
          getResultFiltered={this.getResultFiltered}
          data={this.state.resultInternal}
          keysToFilters={keysToFilters}
          placeholder='Pesquisa de Participantes'
        />
        <TableGenerator
          indicators={this.state.indicators}
          data={data}
          router='participants'/>
      </div>
    );
  }
}

export default Participants;
