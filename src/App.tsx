import {deepPurple, teal} from '@material-ui/core/colors/'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles/';
import * as React from 'react';
import './App.css';
import Header from './components/base/Header'
import TodoContainer from './components/todo'
class App extends React.Component {

  private theme = createMuiTheme({
    palette:{
      primary: deepPurple,
      secondary: teal
    }
  })

  public render() {
    global.console.log(this.state)
    return (
      <div className="App">
        <MuiThemeProvider theme={this.theme}>
          <Header message="Todo Manager"/>
          <TodoContainer/>
        </MuiThemeProvider>
      </div>
    );
  }

}

export default App;
