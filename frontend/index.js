import React from 'react';
import ReactDOM from "react-dom/client"; // Cambiar a ReactDOM.createRoot para React 18+
import App from './App';
import './styles/global.css'; // Asegúrate de que este archivo exista o elimina esta línea si no es necesario

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);