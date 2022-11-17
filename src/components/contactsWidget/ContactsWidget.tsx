import React from 'react';
import './ContactsWidget.scss'
const ContactsWidget = () => {
    return (
        <div className='contsctsWidget'>
            <a target={'_blank'} type='tel' href="+7 (908) 099 55-41" className='contsctsWidget__link contsctsWidget__link--tel'></a>
            <a target={'_blank'} href="" className='contsctsWidget__link contsctsWidget__link--tg'></a>
            <a target={'_blank'} href="" className='contsctsWidget__link contsctsWidget__link--vk'></a>
            <a target={'_blank'} href="" className='contsctsWidget__link contsctsWidget__link--github'></a>
        </div>
    );
};

export default ContactsWidget;