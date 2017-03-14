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
import Icon from 'components/Icon';
import { callApi } from 'utils/formActions';
import { COLOR_DEFAULT } from 'utils/constants';
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
    this.handleChange();

    callApi('DELETE', `participants/${this.state.id}`, [], (e, status) => {
      if (e.status === 200) {
        Alert.success('Registro excluido com sucesso');
      } else {
        Alert.error('Não foi possível excluir este registro');
      }
      this.handleChange();
    });
  }

  generateIndicators (indicators) {
    const header = [];
    for (let i in indicators){
      header.push(<TableHeaderColumn key={i} tooltip={indicators[i]}>{indicators[i]}</TableHeaderColumn>)
    }

    return header;
  }

  generateRows (row) {
    const rows = [];
    for (let i in row) {
      rows.push(<TableRowColumn>{row[i]}</TableRowColumn>);
    }

    return rows;
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
              {this.generateIndicators(indicators)}
              <TableHeaderColumn tooltip='Ações'>Ações</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => {
              return (
                <TableRow key={index} selected={row.selected}>
                  {this.generateRows(row)}
                  <TableRowColumn>
                    <Link to={`/${router}/form/${row.id}`}>
                      <FloatingActionButton
                        zDepth={0}
                        iconStyle={{ backgroundColor: 'transparent', 'color': COLOR_DEFAULT }}
                        mini={true}>
                        <Icon icon='create' color='#98a6ad' />
                      </FloatingActionButton>
                    </Link>
                    <a
                      onClick={() => this.handleChange(row.id)}>
                      <FloatingActionButton
                        zDepth={0}
                        iconStyle={{ backgroundColor: 'transparent', 'color': COLOR_DEFAULT }}
                        backgroundColor={'transparent'}
                        mini={true}>
                        <Icon icon='delete' color='#98a6ad'/>
                      </FloatingActionButton>
                    </a>
                  </TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              {this.generateIndicators(indicators)}
              <TableHeaderColumn tooltip='Ações'>Ações</TableHeaderColumn>
            </TableRow>
          </TableFooter>
        </Table>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleChange}
        >
          Deseja realmente excluir este registro?
        </Dialog>
      </div>
    );
  }
}

export default TableGenerator;
