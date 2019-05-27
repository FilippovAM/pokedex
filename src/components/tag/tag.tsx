import React from 'react';
import classNames from 'classnames';
import './tag';

interface TagProps {
    text: string;
    className: string;
}

export const Tag = (props: TagProps) => {
    return (
        <span className={classNames('tag', props.className)}>{props.text}</span>
    );
};