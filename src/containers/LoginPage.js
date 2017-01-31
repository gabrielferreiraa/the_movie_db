import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './login.css';
import '../style-default.css';

const LoginPage = () => {
  return (
    <MuiThemeProvider>
      <div className={styles.loginContainer}>
        <img src='http://www.ilheus24h.com.br/v1/wp-content/uploads/2013/10/logo_pt.gif' />
        <Paper zDepth={1} className={styles.paper}>
          <TextField
            hintText='admin'
            floatingLabelText='Usuário'
          />
          <TextField
            hintText='***'
            floatingLabelText='Senha'
            type='password'
          />
          <div>
            <Link to='/dashboard'>
              <RaisedButton label="Entrar" primary={true} />
            </Link>
          </div>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

export default LoginPage;
