import React from 'react';
import MyButton from '../../../../components/myButton/MyButton';
import { useCreateTechnologyMutation, useDeleteTechnologyMutation, useFechAllTechnologiesQuery } from '../../../../service/RTK/TechnologiesService';
import './TechnologiesAdminPanel.scss'
import TechnologyAdminPanel from './technology/TechnologyAdminPanel';
const TechnologiesAdminPanel = () => {
    const { data: technologies } = useFechAllTechnologiesQuery('')
    const [deleteTechnology] = useDeleteTechnologyMutation()
    const [createTecnologies] = useCreateTechnologyMutation()

    const createTechnologyHandler = async (name: string) => {
        await createTecnologies(name).unwrap()
    }

    const deleteTechnologyHandler = async (id: number) => {
        await deleteTechnology(id).unwrap()
    }
    return (
        <div className='technologiesAdminPanel'>
            <MyButton type='button'>Добавить технологию</MyButton>
            <div className="technologiesAdminPanel__list">
                {technologies?.map((technology) =>
                    <TechnologyAdminPanel deleteTechnology={deleteTechnologyHandler} key={technology.id} technology={technology} />
                )}
            </div>
        </div>
    );
};

export default TechnologiesAdminPanel;