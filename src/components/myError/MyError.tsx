import React, { FC, ReactNode } from 'react';
import './MyError.scss'

interface MyErrorProps {
    children: ReactNode
}

const MyError: FC<MyErrorProps> = ({ children }) => {
    return (
        <span className='myError'>
            {children}
        </span>
    );
};

export default MyError;