import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import './Menu.scss'

const publickMenu = [
    { to: '/', value: 'Главная' },
    { to: '/projects', value: 'Проекты' },
    { to: '/contacts', value: 'Контакты' },

]

const privateMenu = [
    { to: '/', value: 'Главная' },
    { to: '/projects', value: 'Проекты' },
    { to: '/contacts', value: 'Контакты' },

]

const adminMenu = [
    { to: '/', value: 'Главная' },
    { to: '/projects', value: 'Проекты' },
    { to: '/contacts', value: 'Контакты' },
    { to: '/adminPanel', value: 'Админ панель' },

]

const Menu: FC = () => {
    const { isAuth, user } = useAppSelector(state => state.user)
    return (
        <nav className='menu'>
            <ul className="menu__list">
                {isAuth
                    ?
                    user.roles.some(e => e.value === 'ADMIN')
                        ?
                        adminMenu.map(item =>
                            <li key={item.to} className="menu__item">
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => isActive ? 'menu__link active' : 'menu__link'}
                                >
                                    {item.value}
                                </NavLink>
                            </li>
                        )
                        :
                        privateMenu.map(item =>
                            <li key={item.to} className="menu__item">
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => isActive ? 'menu__link active' : 'menu__link'}
                                >
                                    {item.value}
                                </NavLink>
                            </li>
                        )
                    :
                    publickMenu.map(item =>
                        <li key={item.to} className="menu__item">
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => isActive ? 'menu__link active' : 'menu__link'}
                            >
                                {item.value}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default Menu;