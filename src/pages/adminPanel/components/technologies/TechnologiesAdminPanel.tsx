import React, { useState } from 'react';
import Modal from '../../../../components/modal/Modal';
import MyButton from '../../../../components/myButton/MyButton';
import { useCreateTechnologyMutation, useDeleteTechnologyMutation, useFechAllTechnologiesQuery } from '../../../../service/RTK/TechnologiesService';
import CreateTechnologyForm from './forms/CreateTechnologyForm';
import './TechnologiesAdminPanel.scss'
import TechnologyAdminPanel from './technology/TechnologyAdminPanel';
const TechnologiesAdminPanel = () => {

    const { data: technologies } = useFechAllTechnologiesQuery('')

    const [deleteTechnology] = useDeleteTechnologyMutation()
    const [createTecnology] = useCreateTechnologyMutation()

    const [modalActive, setModalActive] = useState(false)

    const createTechnologyHandler = async (name: string) => {
        await createTecnology(name).unwrap()
        setModalActive(false)
    }

    const deleteTechnologyHandler = async (id: number) => {
        await deleteTechnology(id).unwrap()
    }
    return (
        <div className='technologiesAdminPanel'>
            <Modal active={modalActive} setActive={setModalActive}>
                <CreateTechnologyForm submitHandler={createTechnologyHandler} />
            </Modal>

            <MyButton onClick={() => setModalActive(true)} type='button'>Добавить технологию</MyButton>

            <div className="technologiesAdminPanel__list">
                {technologies?.map((technology) =>
                    <TechnologyAdminPanel deleteTechnology={deleteTechnologyHandler} key={technology.id} technology={technology} />
                )}
            </div>
        </div>
    );
};

export default TechnologiesAdminPanel;