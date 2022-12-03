import React, { FC, useState } from 'react';
import { useLoginMutation } from '../../service/RTK/UserService';
import MyButton from '../myButton/MyButton';
import MyInput from '../myInput/MyInput';
import './AuthForm.scss'

interface AuthFormProps {
    onSubmit?: any
}

const AuthForm: FC<AuthFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login] = useLoginMutation()
    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        const { token } = await login({ email, password }).unwrap()
        localStorage.setItem('token', token)
        onSubmit(false)
    }


    return (
        <form onSubmit={submitHandler} className='authForm'>
            <MyInput type='email' placeholder='Введите email' value={email} setValue={setEmail} />
            <MyInput type='password' placeholder='Введите пароль' value={password} setValue={setPassword} />
            <MyButton type='submit'>Войти</MyButton>
        </form>
    );
};

export default AuthForm;