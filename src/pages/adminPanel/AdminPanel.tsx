import React, { FC, useState } from 'react';
import './AdminPanel.scss'
import ContentAdminPanel from './components/content/ContentAdminPanel';
import ScrollbarAdminPanel from './components/scrollbar/ScrollbarAdminPanel';
const AdminPanel: FC = () => {


    const [contentActive, SetContentActive] = useState('')


    return (
        <div className='adminPanel'>
            <div className="adminPanel__container _container">
                <h2 className='adminPanel__title'>Административная панель</h2>
                <ScrollbarAdminPanel contentActive={contentActive} SetContentActive={SetContentActive} />
                <ContentAdminPanel contentActive={contentActive} />
            </div>
        </div>
    );
};

export default AdminPanel;