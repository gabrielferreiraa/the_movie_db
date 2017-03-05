'use strict';

import React, { Component } from 'react';
import {
  Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
}
  from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Link } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { callApi } from 'utils/formActions';
import * as Alert from 'components/Alert';

class TableGenerator extends Component {
  constructor () {
    super();
    this.state = {
      open: false,
      id: ''
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (id = '') {
    this.setState({
      open: !this.state.open,
      id: id
    });
  }

  handleDelete () {
    this.setState({ open: true });

    callApi('DELETE', `participants/${this.state.id}`, [], (e, status) => {

      if (e.status === 200) {
        Alert.success('Registro excluido com sucesso');
      } else {
        Alert.error('Não foi possível excluir este registro');
      }
      this.handleChange();
    });

  }

  render () {
    const { indicators, data, router } = this.props;

    const actions = [
      <FlatButton
        label="Fechar"
        primary={true}
        onTouchTap={this.handleChange}
      />,
      <FlatButton
        label="Sim"
        primary={true}
        onTouchTap={this.handleDelete}
      />,
    ];

    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              {indicators.map((indicator, index) => {
                return <TableHeaderColumn key={index} tooltip={indicator}>{indicator}</TableHeaderColumn>
              })}
              <TableHeaderColumn tooltip='Ações'>Ações</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{row.id}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.cpf}</TableRowColumn>
                <TableRowColumn>{row.createdAt}</TableRowColumn>
                <TableRowColumn>
                  <Link to={`/${router}/form/${row.id}`}>
                    <FloatingActionButton
                      zDepth={0}
                      iconStyle={{ backgroundColor: 'transparent', 'color': '#E76049' }}
                      mini={true}>
                      <i className='material-icons'>create</i>
                    </FloatingActionButton>
                  </Link>
                  <a
                    onClick={() => this.handleChange(row.id)}>
                    <FloatingActionButton
                      zDepth={0}
                      iconStyle={{ backgroundColor: 'transparent', 'color': '#E76049' }}
                      backgroundColor={'transparent'}
                      mini={true}>
                      <i className='material-icons'>delete</i>
                    </FloatingActionButton>
                  </a>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              {indicators.map((indicator, index) => {
                return <TableHeaderColumn key={index} tooltip={indicator}>{indicator}</TableHeaderColumn>
              })}
              <TableHeaderColumn tooltip='Ações'>Ações</TableHeaderColumn>
            </TableRow>
          </TableFooter>
        </Table>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Deseja realmente excluir este registro?
        </Dialog>
      </div>
    );
  }
}

export default TableGenerator;
