'use strict';

import React, { Component } from 'react';
import { callApi } from 'utils/formActions';
import serialize from 'form-serialize';
import { hashHistory } from 'react-router';
import Input from 'components/Input';
import * as Alert from 'components/Alert';

class ParticipantsForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isEditing: !!props.params.id,
      slideIndex: 0,
      participant: {
        name: '',
        cpf: '',
        email: '',
        password: ''
      }
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._onHandleChange = this._onHandleChange.bind(this);
  }

  componentWillMount () {
    this.state.isEditing ? callApi('GET', `participants/${this.props.params.id}`, [], (e, status) => {
      if (e.status === 200) {
        const participant = e.data.data;
        this.setState({
          participant: participant
        });
      } else {
        console.log(e);
      }
    }) : '';
  }

  save (response) {
    const method = !!this.props.params.id ? 'PUT' : 'POST';
    const url = !!this.props.params.id ? `participants/${this.props.params.id}` : `participants`;

    callApi(method, url, response, (e) => {
      if (e.status === 200) {
        hashHistory.push('/participants');
        Alert.success(`Cadastro ${!!this.props.params.id ? 'editado' : 'realizado'} com sucesso`);
      } else {
        console.log('Ocorreu um problema ao salvar o cadastro');
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
          <Input name='name' label='Nome' value={this.state.participant.name} />
          <br />
          <Input mask='999.999.999-99' masked={true} name='cpf' label='CPF' value={this.state.participant.cpf} />
          <br />
          <Input name='email' label='E-mail' value={this.state.participant.email} />
          <br />
          <Input name='password' label='Senha' type='password' value={this.state.participant.password} />
          <br />
          <button type='submit'>Salvar</button>
        </form>
      </div>
    );
  }
}

export default ParticipantsForm;
