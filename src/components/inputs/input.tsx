import React from 'react';
import './input.scss';
import {InputType} from '../../utils/enums';

interface InputProps {
    type?: InputType;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props: InputProps) => {
    const {type = InputType.TEXT} = props;
    return (
        <input type={type} {...props}/>
    );
};