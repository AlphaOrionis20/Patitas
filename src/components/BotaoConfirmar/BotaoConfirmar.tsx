import { NavLink } from 'react-router-dom';
import React from 'react'
import { BotaoConfirmar_ } from './style';

interface botaoConfirmarInterface{
    texto:string;
    onClick: VoidFunction;
}

function BotaoConfirmar({texto,onClick}:botaoConfirmarInterface) {
  return (
    <BotaoConfirmar_ className='botaoConfirmar' onClick={onClick} >
      {texto}
    </BotaoConfirmar_>
  )
}

export default BotaoConfirmar
