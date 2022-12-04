import React, { FC } from 'react';
import MyButton from '../../../../../components/myButton/MyButton';
import { ITechnology } from '../../../../../models/ITechnology';
import './TechnologyAdminPanel.scss'

interface TechnologyAdminPanelProps {
    technology: ITechnology
    deleteTechnology: (id: number) => Promise<void>
}

const TechnologyAdminPanel: FC<TechnologyAdminPanelProps> = ({ technology, deleteTechnology }) => {
    return (
        <div className='technologyAdminPanel'>
            <div className="technologyAdminPanel__name">{technology.name}</div>
            <MyButton type='button'>Редактировать</MyButton>
            <MyButton onClick={() => deleteTechnology(technology.id)} variant='red' type='button'>Удалить</MyButton>

        </div>
    );
};

export default TechnologyAdminPanel;