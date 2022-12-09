import { FC, useEffect, useRef, useState } from 'react';
import { IProject } from '../../models/IProject';
import { useFechAllProjectsQuery } from '../../service/RTK/ProjectService';
import ProjectsFilter from './components/projectFilter/ProjectsFilter';
import ProjectItem from './components/projectsItem/ProjectItem';
import './Projects.scss'
const Projects: FC = () => {
    const container = useRef(null)

    const { data: projects } = useFechAllProjectsQuery('')

    const [filteredProjects, setFilteredProjects] = useState<IProject[]>([])
    useEffect(() => {
        projects && setFilteredProjects(projects)
    }, [projects])

    return (
        <div className='projects'>
            <div ref={container} className="projects__container _container">
                <h2 className="projects__title">
                    Проекты
                </h2>
                <ProjectsFilter projects={projects} setProject={setFilteredProjects} />
                {filteredProjects.length
                    ?
                    <div className="projects__list">
                        {filteredProjects.map((project) =>
                            <ProjectItem key={project.id} project={project} />
                        )}
                    </div>
                    : <div className='projects__not-found'>Проекты не найдены</div>
                }

            </div>
        </div>
    );
};

export default Projects;