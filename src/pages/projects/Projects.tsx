import { FC, useRef } from 'react';
import { useFechAllProjectsQuery } from '../../service/RTK/ProjectService';
import ProjectItem from './components/ProjectItem';
import './Projects.scss'
const Projects: FC = () => {
    const container = useRef(null)

    const { data: projects } = useFechAllProjectsQuery('')

    return (
        <div className='projects'>
            <div ref={container} className="projects__container _container">
                <h2 className="projects__title">
                    Проекты
                </h2>
                <div className="projects__list">
                    {projects?.map((project) =>
                        <ProjectItem key={project.id} project={project} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;