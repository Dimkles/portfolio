import React, { FC } from 'react';
import './ContactsWidget.scss'
const ContactsWidget: FC = () => {
    return (
        <div className='contactsWidget'>
            <ul className='contactsWidget__list'>
                {/* <li className='contactsWidget__item'>
                    <a target={'_blank'} type='tel' href="+7 (908) 099 55-41" className='contsctsWidget__link contsctsWidget__link--tel'>
                        +7 (908) 099 55-41
                    </a>
                </li> */}
                <li>
                    <a target={'_blank'} href="https://t.me/Dimkless3034" className='contsctsWidget__link contsctsWidget__link--tg'>
                        <img src="./img/tg.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a target={'_blank'} href="https://vk.com/dimkless3034" className='contsctsWidget__link contsctsWidget__link--vk'>
                        <img src="./img/vk.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a target={'_blank'} href="https://github.com/Dimkles" className='contsctsWidget__link contsctsWidget__link--github'>
                        <img src="./img/github.svg" alt="" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContactsWidget;