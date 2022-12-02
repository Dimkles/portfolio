import React, { FC, ReactNode } from 'react';
import './MyButton.scss'

interface MyButtonProps {
    children: ReactNode
    type: 'button' | 'submit'
    onClick?: any
}

const MyButton: FC<MyButtonProps> = ({ children, type, onClick }) => {
    return (
        <button onClick={onClick} type={type} className='myButton'>
            {children}
        </button>
    );
};

export default MyButton;