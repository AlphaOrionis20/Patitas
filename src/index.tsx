import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login/Login';
import './reset.css';
import Cadastrar from './pages/Cadastrar/Cadastrar';
import ConfirmarEmail from './pages/ConfirmarEmail/ConfirmarEmail';
import EmailConfirmado from './pages/EmailConfirmado/EmailConfirmado';
import Inicio from './pages/Inicio/Inicio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Inicio/>
  </React.StrictMode>
);

reportWebVitals();
