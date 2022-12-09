import React, { FC, useState } from 'react';
import { isCustomError } from '../../service/RTK/service';
import { useLoginMutation, useRegistrationMutation } from '../../service/RTK/UserService';
import MyButton from '../myButton/MyButton';
import MyError from '../myError/MyError';
import MyInput from '../myInput/MyInput';
import './AuthForm.scss'

interface AuthFormProps {
    setModalActive?: any
}

const AuthForm: FC<AuthFormProps> = ({ setModalActive }) => {
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [login] = useLoginMutation()
    const [registration] = useRegistrationMutation()
    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        if (isRegistration) {
            try {
                const { token } = await registration({ email, password }).unwrap()
                localStorage.setItem('token', token)
                setModalActive(false)
            } catch (e) {
                if ((isCustomError(e))) {
                    setError(e.data.message)
                }
            }
        } else {
            try {
                const { token } = await login({ email, password }).unwrap()
                localStorage.setItem('token', token)
                setModalActive(false)
            } catch (e) {
                if ((isCustomError(e))) {
                    setError(e.data.message)
                }
            }
        }

    }

    return (
        <React.Fragment>
            <form onChange={() => setError('')} onSubmit={submitHandler} className='authForm'>
                <MyInput name='Email' type='email' placeholder='Введите email' value={email} setValue={setEmail} />
                <MyInput name='Пароль' type='password' placeholder='Введите пароль' value={password} setValue={setPassword} />
                <MyButton type='submit'>{isRegistration ? 'Регистрация' : 'Вход'} </MyButton>
                {error && <MyError>{error}</MyError>}
            </form>
            <span onClick={() => setIsRegistration((prev) => !prev)} className='authForm__isRegistration'>{isRegistration ? 'Войти' : 'Зарегистрироваться'}</span>
        </React.Fragment>


    );
};

export default AuthForm;