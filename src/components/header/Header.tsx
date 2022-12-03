import React, { FC } from 'react';
import AuthWidget from '../authWidget/AuthWidget';
import ContactsWidget from '../contactsWidget/ContactsWidget';
import Menu from '../menu/Menu';
import './Header.scss'
const Header: FC = () => {
    return (
        <header className='header'>
            <div className="header__container _container">
                <Menu />
                <AuthWidget />
            </div>
        </header>
    );
};

export default Header;