'use strict';

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { callApi } from 'utils/formActions';
import serialize from 'form-serialize';
import { browserHistory } from 'react-router';
import * as Alert from 'components/Alert';

class ParticipantsForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isEditing: !!props.params.id,
      participant: {
        name: '',
        cpf: ''
      }
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._onHandleChange = this._onHandleChange.bind(this);
  }

  componentWillMount () {
    this.state.isEditing ? callApi('GET', `participants/${this.props.params.id}`, [], (e, status) => {
      if (status === 'success') {
        this.setState({
          participant: {
            name: e.data.name,
            cpf: e.data.cpf
          }
        });
      } else {
        console.log(e);
      }
    }) : '';
  }

  save (response) {
    const method = !!this.props.params.id ? 'PUT' : 'POST';
    const url = !!this.props.params.id ? `participants/${this.props.params.id}` : `participants`;

    callApi(method, url, response, (e, status) => {
      if (status === 'success') {
        browserHistory.push('/participants');
        Alert.success(`Cadastro ${!!this.props.params.id ? 'editado' : 'realizado'} com sucesso`);
      } else {
        Alert.error('Ocorreu um problema ao salvar o cadastro');
      }
    });
  }

  _handleSubmit (e) {
    e.preventDefault();
    const formParticipant = document.querySelector('#formParticipant');
    const response = serialize(formParticipant, {
      hash: true
    });
    this.save(response);
  }

  _onHandleChange (event) {
    this.setState({
      participant: {
        [event.target.name]: event.target.value
      }
    });
  }

  render () {
    return (
      <div>
        <h1>{this.state.isEditing ? 'Editar' : 'Cadastrar'} Participante</h1>
        <form onSubmit={this._handleSubmit} id='formParticipant'>
          <TextField
            value={this.state.participant.name}
            name='name'
            floatingLabelText='Nome'
            onChange={this._onHandleChange}
          />
          <br />
          <TextField
            value={this.state.participant.cpf}
            name='cpf'
            floatingLabelText='CPF'
            onChange={this._onHandleChange}
          />
          <button type='submit'>Salvar</button>
        </form>
      </div>
    );
  }
}

export default ParticipantsForm;
