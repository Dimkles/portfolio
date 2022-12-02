import React, { useState } from 'react';
import MyInput from '../myInput/MyInput';
import './AuthForm.scss'
const AuthForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='authForm'>
            <MyInput type='email' placeholder='Введите email' value={email} setValue={setEmail} />
            <MyInput type='password' placeholder='Введите пароль' value={password} setValue={setPassword} />
        </div>
    );
};

export default AuthForm;