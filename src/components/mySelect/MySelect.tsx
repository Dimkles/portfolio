import React, { FC, useState } from 'react';
import './MySelect.scss'

interface selectedType {
    name: string
    value: string
}

interface MySelectProps {
    options: selectedType[]
    placeholder: string
    setValue: (value: string) => void
}

const MySelect: FC<MySelectProps> = ({ options, placeholder, setValue }) => {

    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState<selectedType>({} as selectedType)
    const clickHandler = (option: selectedType) => {
        setSelected(option)
        setValue(option.value)
        setShow(false)
    }

    return (
        <div className="mySelect">
            <button
                type="button"
                className={show ? "mySelect__toggle show" : "mySelect__toggle"}
                onClick={() => setShow(!show)}
            >
                {selected.name ? selected.name : placeholder}
            </button>
            <div
                className={show
                    ? "mySelect__dropdown show"
                    : "mySelect__dropdown"}
            >
                <ul className="mySelect__options">
                    {options.map(option =>
                        <li
                            onClick={() => clickHandler(option)}
                            key={option.value}
                            className={selected.value === option.value ? 'mySelect__option selected' : 'mySelect__option'}
                        >
                            {option.name}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default MySelect;