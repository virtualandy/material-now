import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButtonExampleComponent from './RaisedButtonExampleComponent';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import './App.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
	        <body>
            <AppBar title="I want it now!" />
            <RaisedButtonExampleComponent />
          </body>
        </MuiThemeProvider>
    );
  }
}

export default App;
