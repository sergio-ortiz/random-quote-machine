import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/styles.scss'
import "bootstrap-icons/font/bootstrap-icons.css";
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
