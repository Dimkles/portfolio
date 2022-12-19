import React, { FC } from 'react';

interface MySelectProps {
    options: { name: string, value: string }[]
    defaultValue: string
    value: string
    setValue: any
}


const MySelect: FC<MySelectProps> = ({ options, defaultValue, value, setValue }) => {
    return (
        <select
            value={value}
            onChange={event => setValue(event.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map((option: any) =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;