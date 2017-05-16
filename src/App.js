import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

import './App.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
	    <MyAwesomeReactComponent />
	</MuiThemeProvider>
    );
  }
}

export default App;
