import React, { useState } from 'react';
import Modal from '../../../../components/modal/Modal';
import MyButton from '../../../../components/myButton/MyButton';
import { useCreateProjectMutation, useFechAllProjectsQuery } from '../../../../service/RTK/ProjectService';
import CreateProjectForm from './forms/CreateProjectForm';
import ProjectAdminPanel from './project/ProjectAdminPanel';
import './ProjectsAdminPanel.scss'
const ProjectsAdminPanel = () => {
    const { data: projects } = useFechAllProjectsQuery('')
    const [createProject] = useCreateProjectMutation()

    const [modalActive, setModalActive] = useState(false)

    const createProjectHandler = async (body: FormData) => {
        await createProject(body).unwrap()
        setModalActive(false)
    }

    return (
        <div className='projectsAdminPanel'>
            <Modal active={modalActive} setActive={setModalActive}>
                <CreateProjectForm submitHandler={createProjectHandler} />
            </Modal>

            <MyButton onClick={() => setModalActive(true)} type='button'>Создать проект</MyButton>
            <div className="projectsAdminPanel__list">
                {projects?.map((project) =>
                    <ProjectAdminPanel key={project.id} project={project} />
                )}
            </div>

        </div>
    );
};

export default ProjectsAdminPanel;