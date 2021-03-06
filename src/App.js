import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import './App.css';
import Header from './common/header'
import Home from './home/index'
import CreateList from './createList/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#303f9f',
    },
  },
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/lista/:action' component={CreateList} />
              </Switch>
            </div>

          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App;
