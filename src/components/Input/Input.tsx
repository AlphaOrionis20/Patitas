import React from 'react'

import './style.css'

interface inputInterface {
    img: string;
    placeholder: string;
    label: string;
    id: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    type?: string;
}

const Input = ({img,placeholder,label,id,value,setValue,type="text"}:inputInterface) => {
  return (
    <div className='caixaInput'>
        <label className='labelInput' htmlFor={id}>{label}</label>
        <div className='paddingInput'>
          <div className='inputConteiner'>
              <img className='cat' src={img} alt=''/>
              <input value={value} className="input" type={type} id={id} placeholder={placeholder} onChange={(event)=>{
                const target=event.target
                setValue(target.value)
              }
            }/>
          </div>
        </div>
        
    </div>

  )
}

export {Input}
