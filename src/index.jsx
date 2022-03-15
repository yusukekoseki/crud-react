import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from "react-redux"
import { CookiesProvider } from "react-cookie"
import store from "./store/index"


ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
)
