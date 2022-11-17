import React from 'react';
import ContactsWidget from '../contactsWidget/ContactsWidget';
import Menu from '../menu/Menu';
import './Header.scss'
const Header = () => {
    return (
        <header className='header'>
            <div className="header__container _container">
                <Menu />
                <ContactsWidget />
            </div>
        </header>
    );
};

export default Header;