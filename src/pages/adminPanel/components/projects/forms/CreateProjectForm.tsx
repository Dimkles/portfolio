import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import MyButton from '../../../../../components/myButton/MyButton';
import MyError from '../../../../../components/myError/MyError';
import MyInput from '../../../../../components/myInput/MyInput';
import MyTextarea from '../../../../../components/myTextarea/MyTextarea';
import { useCreateProjectMutation } from '../../../../../service/RTK/ProjectService';
import { isCustomError } from '../../../../../service/RTK/service';
import { useFechAllTechnologiesQuery } from '../../../../../service/RTK/TechnologiesService';
import './CreateProjectForm.scss'

interface CreateProjectFormProps {
    setModalActive: Dispatch<SetStateAction<boolean>>
}

const CreateProjectForm: FC<CreateProjectFormProps> = ({ setModalActive }) => {
    const [createProject] = useCreateProjectMutation()
    const { data: technologies } = useFechAllTechnologiesQuery('')

    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [projectTechnologies, setProjectTechnologies] = useState<number[] | []>([])
    const [image, setImage] = useState<File | undefined>(undefined)

    const technologyClickHandler = (id: number) => {
        if (error) setError('')
        if (projectTechnologies.some((e) => e === id)) {
            setProjectTechnologies((prev) => [...prev.filter((e) => e != id)])

        } else {
            setProjectTechnologies((prev) => [...prev, id])
        }
    }

    const resetForm = () => {
        setName('')
        setDescription('')
        setLink('')
        setProjectTechnologies([])
        setImage(undefined)
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (image && description && name && link && projectTechnologies.length) {
            try {
                const body = new FormData()
                body.append('image', image)
                body.append('description', description)
                body.append('name', name)
                body.append('link', link)
                body.append('technologies', projectTechnologies.toString())
                await createProject(body).unwrap()
                setModalActive(false)
                resetForm()
            } catch (e) {
                if ((isCustomError(e))) {
                    setError(e.data.message)
                }
            }
        } else {
            setError('Заполните все поля')
        }
    }

    return (
        <form onChange={() => setError('')} onSubmit={onSubmit} className='createProjectForm'>
            <MyInput name='Название' type='text' placeholder='Введите название' value={name} setValue={setName} />
            <MyTextarea name='Описание' placeholder='Введите описание' value={description} setValue={setDescription} />
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
            {error && <MyError>{error}</MyError>}
        </form>
    );
};

export default CreateProjectForm;