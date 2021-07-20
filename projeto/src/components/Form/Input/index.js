import React from 'react';
import "./style.css"

// import { Container } from './styles';

function Input({ type = "text", label, id, value, setValue, ...props}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input className="inputCentral" id={id} type={type} value={value} onChange={({target}) => setValue(target.value)} {...props}/>
        </div>
    ) 
}

export default Input;