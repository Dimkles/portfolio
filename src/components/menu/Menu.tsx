import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss'
const Menu = () => {
    return (
        <nav className='menu'>
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'menu__link--active' : 'menu__link'}
                    >
                        Главная
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink
                        to='/projects'
                        className={({ isActive }) => isActive ? 'menu__link--active' : 'menu__link'}
                    >
                        Проекты
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink
                        to='/contacts'
                        className={({ isActive }) => isActive ? 'menu__link--active' : 'menu__link'}
                    >
                        Контакты
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;