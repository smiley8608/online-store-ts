import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import 'react-app-polyfill/stable'
import 'core-js'
import "@coreui/coreui/dist/css/coreui.css"
import "antd/dist/antd.min.css"
import axios from 'axios';


axios.defaults.baseURL = "http://192.168.0.125:5000"

let token = localStorage.getItem("jwt-token")
if(token){
  axios.defaults.headers.common['jwt-token'] = token
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
