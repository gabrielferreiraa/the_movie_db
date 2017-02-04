'use strict';

import React, { Component } from 'react';
import {
  Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
}
  from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { Link } from 'react-router';
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
        <Table
          multiSelectable={true}
          enableSelectAll={true}
        >
          <TableHeader>
            <TableRow>
              {indicators.map((indicator, index) => (
                <TableHeaderColumn key={index} tooltip={`${indicator} do Participante`}>{indicator}</TableHeaderColumn>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{row.id}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.role}</TableRowColumn>
                <TableRowColumn>{row.status === 0 ? 'Inativo' : 'Ativo'}</TableRowColumn>
                <TableRowColumn>
                  <Link to={`/participants/form/${row.id}`}>
                    <FloatingActionButton
                      zDepth={0}
                      backgroundColor={'#E76049'}
                      mini={true}>
                      <ContentCreate />
                    </FloatingActionButton>
                  </Link>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              {indicators.map((footerName, index) => (
                <TableRowColumn key={index}>{footerName}</TableRowColumn>
              ))}
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

export default Participants;
