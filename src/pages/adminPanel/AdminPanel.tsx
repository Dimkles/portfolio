import React, { FC } from 'react';
import './AdminPanel.scss'
const AdminPanel: FC = () => {
    return (
        <div className='adminPanel'>
            <div className="adminPanel__container _container">
                <h2 className='adminPanel__title'>Административная панель</h2>
                <div className="adminPanel__accordion accordionAdminPanel">

                </div>
            </div>
        </div>
    );
};

export default AdminPanel;