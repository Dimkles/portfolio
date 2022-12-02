import React, { useState } from 'react';
import AuthForm from '../authForm/AuthForm';
import Modal from '../modal/Modal';
import './AuthWidget'
const AuthWidget = () => {
    const [modalAuthActive, setModalAuthActive] = useState(false)
    return (
        <div className='authWidget'>
            <button onClick={() => setModalAuthActive(true)}>войти</button>
            <Modal active={modalAuthActive} setActive={setModalAuthActive}>
                <AuthForm />
            </Modal>
        </div>
    );
};

export default AuthWidget;