import React, { Dispatch, FC, SetStateAction, useEffect, useMemo, useState } from 'react';
import MyInput from '../../../../components/myInput/MyInput';
import MyseectCust from '../../../../components/mySelect/MySelect';
import MySelect from '../../../../components/mySelect/MySelect';
import { IProject } from '../../../../models/IProject';
import './ProjectsFilter.scss'

interface ProjectsFilterProps {
    projects: IProject[] | undefined
    setProjects: Dispatch<SetStateAction<IProject[]>>
}

const ProjectsFilter: FC<ProjectsFilterProps> = ({ projects, setProjects }) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedSort, setSelectedSort] = useState('')

    const sortedProjects = useMemo(() => {
        if (projects) {
            if (selectedSort === 'old') {
                return [...projects].sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
            } else if (selectedSort === 'new') {
                return [...projects].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
            } else {
                return projects
            }
        }
    }, [projects, selectedSort])

    const sortedAndSearchedProjects = useMemo(() => {
        return sortedProjects?.filter(project => project.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedProjects])


    useEffect(() => {
        sortedAndSearchedProjects && setProjects(sortedAndSearchedProjects)
    }, [sortedAndSearchedProjects, setProjects])

    return (
        <div className='projectsFilter'>
            <MyInput name='Поиск' type='text' value={searchQuery} setValue={setSearchQuery} placeholder='Поиск' />
            <MySelect
                setValue={(sort: string) => setSelectedSort(sort)}
                placeholder={'Сортировка'}
                options={[
                    { value: 'new', name: 'Сначала новые' },
                    { value: 'old', name: 'Сначала старые' }
                ]}
            />
        </div>
    );
};

export default ProjectsFilter;