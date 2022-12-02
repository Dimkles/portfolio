import React, { Dispatch, FC, SetStateAction } from 'react';
import './MyInput.scss'


interface MyInputProps {
    type: 'text' | 'password' | 'email',
    placeholder: string,
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

const MyInput: FC<MyInputProps> = ({ type, placeholder, value, setValue }) => {
    return (
        <input onChange={(e) => setValue(e.target.value)} value={value} type={type} placeholder={placeholder} className='myInput' />
    );
};

export default MyInput;