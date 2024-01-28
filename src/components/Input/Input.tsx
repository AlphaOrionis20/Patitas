import React from 'react'

import { CaixaInput_, Cat_, InputConteiner_, Input_, LabelInput_, PaddingInput_ } from './style';

interface inputInterface {
    img: string;
    placeholder: string;
    label: string;
    id: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    type?:string;
}

const Input = ({img,placeholder,label,id,value,setValue,type="text"}:inputInterface) => {
  return (
    <CaixaInput_>
        <LabelInput_ htmlFor={id}>{label}</LabelInput_>
        <PaddingInput_>
          <InputConteiner_ >
              <Cat_ src={img} alt=''/>
              <Input_ value={value} className="input" type="text" id={id} placeholder={placeholder} onChange={(event)=>{
                const target=event.target
                setValue(target.value)
              }
            }/>
          </InputConteiner_>
        </PaddingInput_>
    </CaixaInput_>

  )
}

export {Input}
