import React, { FC, useEffect, useState } from 'react';
import MyButton from '../../../../../components/myButton/MyButton';
import MyInput from '../../../../../components/myInput/MyInput';

import { useFechAllTechnologiesQuery } from '../../../../../service/RTK/TechnologiesService';
import './CreateProjectForm.scss'

interface CreateProjectFormProps {
    submitHandler: (body: FormData) => Promise<void>
}

const CreateProjectForm: FC<CreateProjectFormProps> = ({ submitHandler }) => {
    const { data: technologies } = useFechAllTechnologiesQuery('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [projectTechnologies, setProjectTechnologies] = useState<number[] | []>([])
    const [image, setImage] = useState<File>()

    const technologyClickHandler = (id: number) => {

        if (projectTechnologies.some((e) => e === id)) {
            setProjectTechnologies((prev) => [...prev.filter((e) => e != id)])

        } else {
            setProjectTechnologies((prev) => [...prev, id])
        }
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (image) {
            const body = new FormData()
            body.append('image', image)
            body.append('description', description)
            body.append('name', name)
            body.append('link', link)
            body.append('technologies', projectTechnologies.toString())
            submitHandler(body)
        }
    }

    return (
        <form onSubmit={onSubmit} className='createProjectForm'>
            <MyInput name='Название' type='text' placeholder='Введите название' value={name} setValue={setName} />
            <MyInput name='Описание' type='text' placeholder='Введите описание' value={description} setValue={setDescription} />
            <MyInput name='Ссылка' type='text' placeholder='Введите ссылку' value={link} setValue={setLink} />
            <div className='createProjectForm__technologies'>
                <div className='createProjectForm__technologies-title'>Используемые технологии</div>
                {technologies?.map((technology) =>
                    <span
                        onClick={() => technologyClickHandler(technology.id)}
                        key={technology.id}
                        className={projectTechnologies.some((e) => e === technology.id)
                            ? 'createProjectForm__technology active'
                            : 'createProjectForm__technology'}
                    >
                        {technology.name}
                    </span>
                )}
            </div>
            <label className='createProjectForm__file'>
                <span className='createProjectForm__file-name'>Фоновое изображение</span>
                <input accept=".jpg" onChange={(e) => setImage(e.target.files?.[0])} type="file" name="file" id="" />
                <span className='createProjectForm__file-btn'>Выберите файл</span>
                <span className='createProjectForm__file-text'>{image?.name}</span>
            </label>
            <MyButton type='submit'>Создать</MyButton>
        </form>
    );
};

export default CreateProjectForm;