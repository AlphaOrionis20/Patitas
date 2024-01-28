
import React from 'react'
import { Botao_ } from './style';

interface botaoInterface{
    texto:string;
    onClick: VoidFunction;    
}

function Botao({texto,onClick}:botaoInterface) {
  return (
    <Botao_ onClick={onClick} >
        {texto}
    </Botao_>
  )
}

export default Botao
