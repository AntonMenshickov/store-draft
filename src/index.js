import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

window.$cart = JSON.parse(localStorage.getItem('cart'));

if (window.$cart === null) {
  window.$cart = {};
}

window.$search = ''; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
