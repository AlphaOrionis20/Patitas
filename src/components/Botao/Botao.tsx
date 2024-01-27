import './style.css'
import React from 'react'

interface botaoInterface{
    texto:string;
    onClick: VoidFunction;    
}

function Botao({texto,onClick}:botaoInterface) {
  return (
    <button onClick={onClick} className='botao'>
        {texto}
    </button>
  )
}

export default Botao
