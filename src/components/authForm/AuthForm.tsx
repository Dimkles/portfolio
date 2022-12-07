import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import React, { FC, useState } from 'react';
import { CustomErrorType, isCustomError } from '../../service/RTK/service';
import { useLoginMutation } from '../../service/RTK/UserService';
import MyButton from '../myButton/MyButton';
import MyInput from '../myInput/MyInput';
import './AuthForm.scss'

interface AuthFormProps {
    setModalActive?: any
}

const AuthForm: FC<AuthFormProps> = ({ setModalActive }) => {
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, serError] = useState('')
    const [login] = useLoginMutation()
    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const { token } = await login({ email, password }).unwrap()
            localStorage.setItem('token', token)
            setModalActive(false)
        } catch (e) {
            if ((isCustomError(e))) {
                serError(e.data.message)
            }
        }
    }

    const changeFormHandler = (e: React.FormEvent) => {
        serError('')
    }


    return (
        <form onChange={changeFormHandler} onSubmit={submitHandler} className='authForm'>
            <MyInput name='Email' type='email' placeholder='Введите email' value={email} setValue={setEmail} />
            <MyInput name='Пароль' type='password' placeholder='Введите пароль' value={password} setValue={setPassword} />
            <MyButton type='submit'>Войти</MyButton>
            {error && <span className='authForm__error'>{error}</span>}
        </form>
    );
};

export default AuthForm;