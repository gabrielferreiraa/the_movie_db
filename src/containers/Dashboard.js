import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { grey800 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

const bgApp = {
  bg: {
    backgroundColor: grey800,
    fontFamily: 'Roboto'
  }
};

const Dashboard = () => {
  return (
    <MuiThemeProvider>
      <div>
        <AppBar
          style={bgApp.bg}
          title="Painel Administrativo" />
        <Link to='/login'>To Login</Link>
      </div>
    </MuiThemeProvider>
  );
};

export default Dashboard;
