import React from 'react';
import AuthWidget from '../authWidget/AuthWidget';
import ContactsWidget from '../contactsWidget/ContactsWidget';
import Menu from '../menu/Menu';
import './Header.scss'
const Header = () => {
    return (
        <header className='header'>
            <div className="header__container _container">
                <Menu />
                <ContactsWidget />
                <AuthWidget />
            </div>
        </header>
    );
};

export default Header;