import React from 'react';
import { useFechAllProjectsQuery } from '../../../../service/RTK/ProjectService';
import ProjectAdminPanel from './project/ProjectAdminPanel';
import './ProjectsAdminPanel.scss'
const ProjectsAdminPanel = () => {
    const { data: projects } = useFechAllProjectsQuery('')


    return (
        <div className='projectsAdminPanel'>
            {projects?.map((project) =>
                <ProjectAdminPanel key={project.id} project={project} />
            )}
        </div>
    );
};

export default ProjectsAdminPanel;