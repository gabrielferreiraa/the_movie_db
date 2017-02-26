'use strict';

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import styles from './login.css';
import 'src/style-default.css';
import { authUser } from 'utils/formActions';
import AlertContainer from 'react-alert';

class Login extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.alertOptions = {
      offset: 14,
      position: 'bottom right',
      theme: 'dark',
      time: 5000,
      transition: 'fade'
    };

    this._changeStateEmail = this._changeStateEmail.bind(this);
    this._changeStatePassword = this._changeStatePassword.bind(this);
    this._authUser = this._authUser.bind(this);
  }

  _changeStateEmail (e) {
    this.setState({
      email: e.target.value
    });
  }

  _changeStatePassword (e) {
    this.setState({
      password: e.target.value
    });
  }

  _authUser () {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    authUser('POST', 'auth/admins', data, (e, status) => {
      if (status === 'success') {
        if (typeof e.data.token == 'undefined') {
          msg.show(e.data, {
            type: 'error',
            icon: <i className="material-icons" style={{ color: '#e74c3c' }}>error</i>
          });
        } else {
          window.localStorage.setItem('token', e.data.token);
          msg.show('Login realizado com sucesso', {
            type: 'success',
            icon: <i className="material-icons" style={{ color: '#2ecc71' }}>check</i>
          });
          setTimeout(() => {
            browserHistory.push('/dashboard');
          }, 2000);
        }
      } else {
        msg.show('Ocorreu um problema ao buscar informações', {
          type: 'error',
          icon: <i className="material-icons" style={{ color: '#e74c3c' }}>error</i>
        });
      }
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className={styles.loginContainer}>
          <div>
            <Paper zDepth={1} className={styles.paper}>
              <TextField
                hintText='pt@email.com'
                floatingLabelText='E-mail'
                onChange={this._changeStateEmail}
              />
              <TextField
                hintText='***'
                floatingLabelText='Senha'
                type='password'
                onChange={this._changeStatePassword}
              />
              <div>
                <RaisedButton
                  label='Entrar'
                  primary={true}
                  onClick={this._authUser}
                  className={styles.bt}/>
              </div>
            </Paper>
            <AlertContainer
              ref={(a) => global.msg = a}
              {...this.alertOptions}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
