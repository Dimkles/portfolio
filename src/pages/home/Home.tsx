import { FC } from 'react';
import './Home.scss'
const Home: FC = () => {
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;