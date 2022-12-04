import React, { FC, useState } from 'react';
import MyButton from '../../../../../components/myButton/MyButton';
import { BACKEND_URL } from '../../../../../constants';
import { IProject } from '../../../../../models/IProject';
import './ProjectAdminPanel.scss'

interface ProjectAdminPanelProps {
    project: IProject
}

const ProjectAdminPanel: FC<ProjectAdminPanelProps> = ({ project }) => {
    const [activeInfo, setActiveInfo] = useState(false)
    return (
        <div className='projectAdminPanel'>
            <div className="projectAdminPanel__main">
                <div className='projectAdminPanel__image'>
                    <img src={`${BACKEND_URL}/${project.image}`} alt="" />
                </div>
                <div
                    onClick={() => setActiveInfo((prev) => !prev)}
                    className="projectAdminPanel__name"
                >
                    {project.name}
                </div>
                <MyButton type='button'>Редактировать</MyButton>
                <MyButton variant='red' type='button'>Удалить</MyButton>
            </div>
            <div className={activeInfo ? 'projectAdminPanel__info active' : 'projectAdminPanel__info'}>
                <p className="projectAdminPanel__description">{project.description}</p>
                <div className="projectAdminPanel__technologies">
                    {project.technologies.map((technology) =>
                        <div key={technology.id} className="projectAdminPanel__technology">{technology.name}</div>
                    )}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
            </div>
        </div>
    );
};

export default ProjectAdminPanel;