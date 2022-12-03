import { FC, useEffect, useRef } from 'react';
import { useFechAllProjectsQuery } from '../../service/RTK/ProjectService';
import ProjectsSlider from './components/ProjectSlider/ProjectsSlider';
import './Projects.scss'
const Projects: FC = () => {

    const container = useRef(null)

    const { data } = useFechAllProjectsQuery('')
    useEffect(() => {
        console.log(data)
    }, [data])

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