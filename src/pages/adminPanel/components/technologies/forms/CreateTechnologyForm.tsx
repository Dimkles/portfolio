import React, { FC, useState } from 'react';
import MyButton from '../../../../../components/myButton/MyButton';
import MyInput from '../../../../../components/myInput/MyInput';

interface CreateTechnologyFormProps {
    submitHandler: any
}

const CreateTechnologyForm: FC<CreateTechnologyFormProps> = ({ submitHandler }) => {

    const [name, setName] = useState('')

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        submitHandler(name)
    }

    return (
        <form onSubmit={onSubmit}>
            <MyInput placeholder='Введите название' value={name} setValue={setName} name='Название' type='text' />
            <MyButton type='submit'>Создать</MyButton>
        </form>
    );
};

export default CreateTechnologyForm;