import React, { FC, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useLogoutMutation } from '../../service/RTK/UserService';
import AuthForm from '../authForm/AuthForm';
import Modal from '../modal/Modal';
import MyButton from '../myButton/MyButton';
import './AuthWidget.scss'
const AuthWidget: FC = () => {
    const { isAuth, user } = useAppSelector(state => state.user)
    const [modalActive, setModalActive] = useState(false)
    const [logout] = useLogoutMutation()
    const logoutHandler = async () => {
        await logout('').unwrap()
        localStorage.removeItem('token')
    }
    return (
        isAuth
            ?
            <div className="authWidget">
                <div className="authWidget__userEmail">{user.email}</div>
                <MyButton onClick={logoutHandler} type='button'>Выйти</MyButton>
            </div>
            :
            <div className="authWidget">
                <MyButton onClick={() => setModalActive(true)} type='button'>Войти</MyButton>
                <Modal active={modalActive} setActive={setModalActive}>
                    <AuthForm setModalActive={setModalActive} />
                </Modal>
            </div>
    );
};

export default AuthWidget;