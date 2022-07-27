import React from 'react'
import { useRef, useState, useEffect } from 'react';
import StartPrice from './StartPrice'
import FinalPrice from './FinalPrice'
import Select from './Select'
import SubmitButton from './SubmitButton'

const Form = () => {
  const [state, setState] = useState({
    start: '',
    vat: 0.1,
    final: ''
    })
      
  // useEffect(() => {

  // }, [state])
    
    return(
        <form className="p-10 w-3/12 min-w-fit form flex flex-direction-row justify-space-between gap-8 border-2 border-yellow-300 rounded-lg background-dark text-white">
            <StartPrice inputType="text" label="Sale price without VAT" state={state} setState={setState}></StartPrice>
            <Select inputType="select" label="VAT rate" state={state} setState={setState}/>
            <FinalPrice inputType="text" label="Sale price with VAT" state={state} setState={setState}  />
            <SubmitButton className="background-light" state={state} setState={setState}></SubmitButton>
        </form>
    )
}

export default Form