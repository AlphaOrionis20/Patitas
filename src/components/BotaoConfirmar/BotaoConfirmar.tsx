import './style.css'
import React from 'react'

interface botaoConfirmarInterface{
    texto:string;
    onClick: VoidFunction;
}

function BotaoConfirmar({texto,onClick}:botaoConfirmarInterface) {
  return (
    <button className='botaoConfirmar' onClick={onClick}>
        {texto}
    </button>
  )
}

export default BotaoConfirmar
