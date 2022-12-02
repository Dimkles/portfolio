import React, { FC, useState } from 'react';
import AuthForm from '../authForm/AuthForm';
import Modal from '../modal/Modal';
import MyButton from '../myButton/MyButton';
import './AuthWidget'
const AuthWidget: FC = () => {
    const [modalAuthActive, setModalAuthActive] = useState(false)
    return (
        <div className='authWidget'>
            <MyButton onClick={() => setModalAuthActive(true)} type='button'>Войти</MyButton>
            <Modal active={modalAuthActive} setActive={setModalAuthActive}>
                <AuthForm onSubmit={setModalAuthActive} />
            </Modal>
        </div>
    );
};

export default AuthWidget;