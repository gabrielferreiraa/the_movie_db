import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './login.css';
import 'src/style-default.css';

const Login = () => {
  return (
    <MuiThemeProvider>
      <div className={styles.loginContainer}>
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
              <RaisedButton label='Entrar' primary={true} />
            </Link>
          </div>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

export default Login;
