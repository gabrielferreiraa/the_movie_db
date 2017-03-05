'use strict';

import React, { Component } from 'react';
import TableGenerator from 'components/TableGenerator';
import SearchInputComp from 'components/SearchInputComponent';
import { Link } from 'react-router';
import { callApi } from 'utils/formActions';
import RaisedButton from 'material-ui/RaisedButton';
import { green600, white } from 'material-ui/styles/colors';

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

  componentDidMount () {
    callApi('GET', 'participants', [], (e, status) => {
      if (e.status === 200) {
        this.setState({
          result: e.data.data,
          resultInternal: e.data.data
        });
      } else {
        console.log(e);
      }
    });
  }

  render () {
    const keysToFilters = ['name', 'cpf'];
    const indicators = ['ID', 'Nome', 'CPF', 'Adicionado em'];
    const data = this.state.result;

    return (
      <div>
        <span>Aplicação / Participantes</span>
        <Link to='/participants/form'>
          <RaisedButton
            label="Cadastrar Participante"
            backgroundColor={green600}
            labelColor={white}
            style={{ float: 'right' }}
            icon={<i className='material-icons' style={{ color: '#FFF' }}>control_point</i>}
          />
        </Link>
        <SearchInputComp
          getResultFiltered={this.getResultFiltered}
          data={this.state.resultInternal}
          keysToFilters={keysToFilters}
          placeholder='Pesquisa de Participantes'
          fields='Nome ou Cargo'
        />
        <TableGenerator
          indicators={indicators}
          data={data}
          router="participants"/>
      </div>
    );
  }
}

export default Participants;
