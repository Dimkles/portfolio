import React, { FC, ReactNode } from 'react';
import './MyButton.scss'

interface MyButtonProps {
    children: ReactNode
    type: 'button' | 'submit'
    onClick?: any
    variant?: 'yellow' | 'red'
}

const MyButton: FC<MyButtonProps> = ({ children, type, onClick, variant }) => {
    return (
        <button onClick={onClick} type={type} className={variant === 'red' ? 'myButton myButton--red' : 'myButton'}>
            {children}
        </button>
    );
};

export default MyButton;