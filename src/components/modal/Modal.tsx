import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import './Modal.scss'


interface modalProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>
    children: ReactNode
}


const Modal: FC<modalProps> = ({ active, setActive, children }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;