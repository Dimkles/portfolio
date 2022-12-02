import React, { FC } from 'react';
import './Contacts.scss'
const Contacts: FC = () => {
    return (
        <div className='contacts'>
            <div className="contacts__container _container">
                <h2 className='contacts__title'>
                    Контакты
                </h2>
                <ul className='contacts__list'>
                    <li className="contacts__item">
                        <a target={'_blank'} rel="noreferrer" href="tel:89080995541">
                            <img src="./img/phone.png" alt="" /> 89080995541
                        </a>
                    </li>
                    <li className="contacts__item">
                        <a target={'_blank'} rel="noreferrer" href="https://wa.me/79585876658">
                            <img src="./img/whatsapp.svg" alt="" /> +79585876658
                        </a>
                    </li>
                    <li className="contacts__item">
                        <a target={'_blank'} rel="noreferrer" href="https://t.me/Dimkless3034">
                            <img src="./img/tg.svg" alt="" /> t.me/Dimkless3034
                        </a>
                    </li>
                    <li className="contacts__item">
                        <a target={'_blank'} rel="noreferrer" href="https://vk.com/dimkless3034">
                            <img src="./img/vk.svg" alt="" /> vk.com/dimkless3034
                        </a>
                    </li>
                    <li className="contacts__item">
                        <a target={'_blank'} rel="noreferrer" href="https://github.com/Dimkles">
                            <img src="./img/github.svg" alt="" /> github.com/Dimkles
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contacts;