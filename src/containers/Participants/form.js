'use strict';

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { callApi } from 'utils/formActions';
import serialize from 'form-serialize';

class ParticipantsForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isEditing: !!props.params.id,
      participant: {
        name: '',
        cpf: '09788471994'
      }
    };

    this.save = this.save.bind(this);
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

  save (e) {
    e.preventDefault();
    const formParticipant = document.querySelector('#formParticipant');
    const response = serialize(formParticipant, {
      hash: true
    });
    console.log(response);
    callApi('PUT', `participants/${this.props.params.id}`, response, (e, status) => {
      if (status === 'success') {
        console.log(e, 'success');
      } else {
        console.log(e);
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
            value={params.id}
            name="id"
            floatingLabelText="ID do Participante"
          />
          <br/>
          <TextField
            value={this.state.participant.name}
            name="name"
            floatingLabelText="Nome"
          />
          <br/>
          <TextField
            defaultValue={this.state.participant.cpf}
            name="cpf"
            floatingLabelText="CPF"
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default ParticipantsForm;