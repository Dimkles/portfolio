import React, { Dispatch, FC, SetStateAction } from 'react';
import './MyInput.scss'


interface MyInputProps {
    type: 'text' | 'password' | 'email'
    placeholder: string
    value: string
    name?: string
    setValue: Dispatch<SetStateAction<string>>
}

const MyInput: FC<MyInputProps> = ({ type, placeholder, value, setValue, name }) => {
    return (
        <label className='myInput'>
            {name && <span className='myInput__name'>{name}</span>}
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type={type}
                placeholder={placeholder}
            ></input>
        </label>

    );
};

export default MyInput;