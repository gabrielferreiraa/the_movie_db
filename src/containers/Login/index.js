'use strict';

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './login.css';
import 'src/style-default.css';
import { signIn } from 'utils/Auth';
import AlertContainer from 'react-alert';

class Login extends Component {
  constructor () {
    super();
    this.state = {
      email: {
        value: ''
      },
      password: {
        value: ''
      }
    };

    this.alertOptions = {
      offset: 14,
      position: 'bottom right',
      theme: 'dark',
      time: 5000,
      transition: 'fade'
    };

    this._changeStateLogin = this._changeStateLogin.bind(this);
    this._authUser = this._authUser.bind(this);
  }

  _changeStateLogin (e) {
    this.setState({
      [e.target.name]: {
        value: e.target.value
      }
    });
  }

  _authUser () {
    signIn(this.state.email.value, this.state.password.value);
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className={styles.loginContainer}>
          <div>
            <Paper zDepth={1} className={styles.paper}>
              <TextField
                hintText='pt@email.com'
                name='email'
                errorText={this.state.email.valid}
                floatingLabelText='E-mail'
                onChange={this._changeStateLogin}
              />
              <TextField
                hintText='***'
                name='password'
                errorText={this.state.password.valid}
                floatingLabelText='Senha'
                type='password'
                onChange={this._changeStateLogin}
              />
              <div>
                <RaisedButton
                  label='Entrar'
                  primary={true}
                  onClick={this._authUser}
                  className={styles.bt} />
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
