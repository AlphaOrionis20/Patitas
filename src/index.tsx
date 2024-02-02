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
import Upload from './pages/Upload/Upload';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sair_ } from './components/MenuPerfil/style';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Cadastrar' element={<Cadastrar/>}/>
        <Route path='ConfirmarEmail' element={<ConfirmarEmail/>}/>
        <Route path='EmailConfirmado' element={<EmailConfirmado/>}/>
        <Route path='Upload' element={<Upload/>}/>
        <Route path='Login' element={<Sair_/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
