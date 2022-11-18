import React, { useRef } from 'react';
import ProjectsSlider from './components/ProjectSlider/ProjectsSlider';
import './Projects.scss'
const Projects = () => {

    const container = useRef(null)


    return (
        <div className='projects'>
            <div ref={container} className="projects__container _container">
                <h2 className="projects__title">
                    Проекты
                </h2>
            </div>
            <div className="projects__content">
                <ProjectsSlider container={container} />
            </div>
        </div>
    );
};

export default Projects;