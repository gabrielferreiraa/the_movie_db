import React from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { Link } from 'react-router';
import Data from 'src/data';

const Participants = () => {
  return (
    <div>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn tooltip='The ID'>ID</TableHeaderColumn>
              <TableHeaderColumn tooltip='Exibe o nome'>Nome</TableHeaderColumn>
              <TableHeaderColumn tooltip='Exibe o cargo'>Cargo</TableHeaderColumn>
              <TableHeaderColumn tooltip='Status'>Status</TableHeaderColumn>
              <TableHeaderColumn tooltip='Ações'>Ações</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Data.participants.map((row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.role}</TableRowColumn>
                <TableRowColumn>{row.status == 0 ? 'Inativo' : 'Ativo'}</TableRowColumn>
                <TableRowColumn>
                  <Link to={`/participants/form/${row.id}`}>
                    <FloatingActionButton zDepth={0}
                                        mini={true}>
                                        <ContentCreate  />
                    </FloatingActionButton>
                </Link>
                </TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Nome</TableRowColumn>
              <TableRowColumn>Cargo</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
              <TableRowColumn>Ações</TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
    </div>
  );
};

export default Participants;
