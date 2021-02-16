import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import 'antd/dist/antd.compact.min.css'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
