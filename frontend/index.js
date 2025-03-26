import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.css'; // Asegúrate de que este archivo exista o elimina esta línea si no es necesario

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);