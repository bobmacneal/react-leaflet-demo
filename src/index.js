import App from './App'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom'
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles'

const rootElement = document.querySelector('#root')

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
)
