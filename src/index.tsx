import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login/Login';
import './reset.css';
import Cadastrar from './pages/Cadastrar/PgCadastrar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>
);

reportWebVitals();
