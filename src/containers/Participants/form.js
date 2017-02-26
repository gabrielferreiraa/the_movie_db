'use strict';

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { callApi } from 'utils/formActions';
import serialize from 'form-serialize';
import { browserHistory } from 'react-router';

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

    this.save = this.save.bind(this);
    this._onHandleChange = this._onHandleChange.bind(this);
  }

  componentWillMount () {
    if (this.state.isEditing) {
      callApi('GET', `participants/${this.props.params.id}`, [], (e, status) => {
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
      });
    }
  }

  _handleSubmit(response) {
    const method = !!this.props.params.id ? 'PUT' : 'POST';
    const url = !!this.props.params.id ? `participants/${this.props.params.id}` : `participants`;

    callApi(method, url, response, (e, status) => {
      if (status === 'success') {
        browserHistory.push('/participants');
        msg.show(`Cadastro ${!!this.props.params.id ? 'editado' : 'realizado'} com sucesso`, {
          type: 'success',
          icon: <i className="material-icons" style={{ color: '#2ecc71' }}>check</i>
        });
      } else {
        msg.show('Ocorreu um problema ao salvar o cadastro', {
          type: 'error',
          icon: <i className="material-icons" style={{ color: '#e74c3c' }}>error</i>
        });
      }
    });
  }

  save (e) {
    e.preventDefault();
    const formParticipant = document.querySelector('#formParticipant');
    const response = serialize(formParticipant, {
      hash: true
    });
    this._handleSubmit(response);
  }

  _onHandleChange(event) {
    this.setState({
      participant: {
        [event.target.name]: event.target.value
      }
    });
  }

  render () {
    const params = this.props.params;

    return (
      <div>
        <h1>{this.state.isEditing ? 'Editar' : 'Cadastrar'} Participante</h1>
        <form onSubmit={this.save} id="formParticipant">
          <TextField
            value={this.state.participant.name}
            name="name"
            floatingLabelText="Nome"
            onChange={this._onHandleChange}
          />
          <br/>
          <TextField
            value={this.state.participant.cpf}
            name="cpf"
            floatingLabelText="CPF"
            onChange={this._onHandleChange}
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default ParticipantsForm;