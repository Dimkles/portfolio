import React, { Dispatch, FC, SetStateAction } from 'react';
import './MyTextarea.scss'

interface MyTextareaProps {
    value: string
    setValue: Dispatch<SetStateAction<string>>
    name?: string
    placeholder: string
}

const MyTextarea: FC<MyTextareaProps> = ({ placeholder, setValue, value, name }) => {
    return (
        <label className='myTextarea'>
            {name && <span className='myTextarea__name'>{name}</span>}
            <textarea
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder={placeholder}
            >
            </textarea>
        </label>

    );
};

export default MyTextarea;