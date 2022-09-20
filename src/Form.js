import React, { useState } from 'react';
import './App.css';

const useInputValue = () => {
    const [value, setValue] = useState('');

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue("")
    };
}

const Form = ({ onSubmit }) => {
    const { resetValue, ...text } = useInputValue();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(text.value);
            resetValue();
        }}>
            <input className='input-field' {...text} placeholder="Enter your todo" />
        </form >
    )
}

export default Form