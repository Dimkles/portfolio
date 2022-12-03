import React, { FC, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useLogoutMutation } from '../../service/RTK/UserService';
import AuthForm from '../authForm/AuthForm';
import Modal from '../modal/Modal';
import MyButton from '../myButton/MyButton';
import './AuthWidget'
const AuthWidget: FC = () => {
    const { isAuth } = useAppSelector(state => state.user)
    const [modalAuthActive, setModalAuthActive] = useState(false)
    const [logout] = useLogoutMutation()
    const logoutHandler = async () => {
        await logout('').unwrap()
        localStorage.removeItem('token')
    }
    return (
        <div className='authWidget'>
            {
                isAuth
                    ?
                    <MyButton onClick={logoutHandler} type='button'>Выйти</MyButton>
                    :
                    <MyButton onClick={() => setModalAuthActive(true)} type='button'>Войти</MyButton>
            }

            <Modal active={modalAuthActive} setActive={setModalAuthActive}>
                <AuthForm onSubmit={setModalAuthActive} />
            </Modal>
        </div>
    );
};

export default AuthWidget;