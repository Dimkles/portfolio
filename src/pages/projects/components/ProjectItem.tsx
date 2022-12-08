import React, { FC } from 'react';
import MyButton from '../../../components/myButton/MyButton';
import { BACKEND_URL } from '../../../constants';
import { IProject } from '../../../models/IProject';
import './ProjectItem.scss';
interface ProjectItemProps {
    project: IProject
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {

    const descriptionArray = project.description.split('\r')
    return (
        <div className='projectItem'>
            <div className="projectItem__bg">
                <picture>
                    {project.imagewebp && <source srcSet={`${BACKEND_URL}/${project.imagewebp}`} type='image/webp' />}
                    {project.imagejpg && <img src={`${BACKEND_URL}/${project.imagejpg}`} />}
                </picture>
            </div>
            <div className="projectItem__content">
                <h3 className="projectItem__title">
                    {project.name}
                </h3>
                <div className="projectItem__description">
                    {descriptionArray.map((text, index) =>
                        <p key={index} className="projectItem__description-item">{text}</p>
                    )}
                </div>

                <div className="projectItem__technologies">
                    <h4 className="projectItem__technologies__title">
                        Используемые технологии
                    </h4>
                    <div className="projectItem__technologies-list">
                        {project.technologies.map((technology) =>
                            <span className='projectItem__technologies-item' key={technology.id}>{technology.name}</span>
                        )}
                    </div>

                </div>
                <a className='projectItem__link' href={project.link} target="_blank" rel="noopener noreferrer">Посмотреть</a>
            </div>
        </div>
    );
};

export default ProjectItem;