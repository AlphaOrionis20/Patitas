import './style.css'
import React from 'react'

interface botaoInterface{
    texto:string;
    onClick: VoidFunction;
}

function Botao({texto,onClick}:botaoInterface) {
  return (
    <button className='botao' onClick={onClick}>
        {texto}
    </button>
  )
}

export default Botao
