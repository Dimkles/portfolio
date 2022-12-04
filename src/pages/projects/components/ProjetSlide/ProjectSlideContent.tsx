import React, { FC } from 'react';
import { BACKEND_URL } from '../../../../constants';
import { IProject } from '../../../../models/IProject';
import './ProjectSlideContent.scss'

interface ProjectSlideProps {
    project: IProject
}

const ProjectSlide: FC<ProjectSlideProps> = ({ project }) => {
    return (
        <div className='projectSlideContent'>
            <div className="projectSlideContent__bg">
                <img src={`${BACKEND_URL}/${project.image}`} alt="" />
            </div>
            <h3 className="projectSlideContent__title">
                {project.name}
            </h3>
            <p className='projectSlideContent__text'>
                {project.description}
            </p>
            <div className='projectSlideContent__technologies projectSlideContent_technologies'>
                <h4 className='projectSlideContent_technologies__title'>
                    Используемые технологии:
                </h4>
                <ul className="projectSlideContent_technologies__list">
                    {
                        project.technologies.map((technology) =>
                            <li key={technology.id} className='projectSlideContent_technologies__item'>
                                {technology.name}
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="projectSlideContent__button">
                <a rel="noreferrer" target={'_blank'} href={project.link} >Посмотреть</a>
            </div>
        </div>
    );
};

export default ProjectSlide;