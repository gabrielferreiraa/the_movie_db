import React from 'react';
import {
  Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
}
  from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { Link } from 'react-router';
import Data from 'src/data';

const Participants = () => {
  const indicators = ['ID', 'Nome', 'Cargo', 'Status', 'Ações'];

  return (
    <div>
      <span>Aplicação / Participantes</span>
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
          {Data.participants.map((row, index) => (
            <TableRow key={index} selected={row.selected}>
              <TableRowColumn>{index}</TableRowColumn>
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
};

export default Participants;
