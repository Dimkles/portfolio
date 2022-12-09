import React, { Dispatch, FC, SetStateAction, useEffect, useMemo, useState } from 'react';
import MyInput from '../../../../components/myInput/MyInput';
import { IProject } from '../../../../models/IProject';
import './ProjectsFilter.scss'

interface ProjectsFilterProps {
    projects: IProject[] | undefined
    setProject: Dispatch<SetStateAction<IProject[]>>
}

const ProjectsFilter: FC<ProjectsFilterProps> = ({ projects, setProject }) => {

    const [searchQuery, setSearchQuery] = useState('')

    const searchedProjects = useMemo(() => {
        if (projects && searchQuery) {
            return [...projects].filter((project) => project.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return projects
    }, [searchQuery, projects])
    useEffect(() => {
        searchedProjects && setProject([...searchedProjects])
    }, [searchedProjects, setProject])

    return (
        <div className='projectsFilter'>
            <MyInput name='Поиск' type='text' value={searchQuery} setValue={setSearchQuery} placeholder='Поиск' />
        </div>
    );
};

export default ProjectsFilter;