import React, { useEffect } from 'react';
import Modal from '../../components/modal/Modal';
import { useAppSelector } from '../../hooks/redux';
import { useLoginMutation } from '../../service/RTK/AuthService';
import { useGetAllUsersQuery } from '../../service/RTK/usersService';
import './Home.scss'
const Home = () => {
    // const password = 'Monetka162125ss'
    // const email = 'dimkless.work@gmail.com'
    // const { token } = useAppSelector(state => state.auth)
    // const [login, { data }] = useLoginMutation()
    // const { data: users } = useGetAllUsersQuery('')
    // const hanlerLogin = async () => {
    //     await login({ email, password }).unwrap()
    // }
    // const getUsers = async () => {
    //     await login({ email, password }).unwrap()
    // }
    // useEffect(() => {
    //     if (token) {
    //         localStorage.setItem('token', token)
    //     }
    // }, [token])

    return (
        <section className='home'>
            <div className="home__container _container">
                <div className="home__content">
                    <span className='home__subtitle'>Привет, это </span>
                    <h1 className="home__title">
                        Дмитрий Шарабайко
                    </h1>
                    <span className='home__subtitle'>Я веб-разработчик </span>



                    <div className="home__text">
                        Я занимаюсь веб разработкой: <br />
                        - Чистая, кроссбраузерная, аккуратная верстка для дальнейшей посадки на любую CMS <br />
                        - Посадка верстки на CMS WordPress <br />
                        - Разработка Frontend части сайта с использованием фреймворка reactJS <br />
                        <br />

                        Технологии, которые я использую: <br />
                        HTML, CSS(SCSS), JavaScript, reactJS. Придерживаюсь методологии БЭМ <br />
                        <br />
                        Всегда ответственно подхожу к выполнения любой задачи <br />
                        Работа со мной это: <br />
                        - Уверенность в качестве выполненной работы <br />
                        - соблюдение сроков
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;