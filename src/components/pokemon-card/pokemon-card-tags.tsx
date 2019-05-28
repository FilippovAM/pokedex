import React from 'react';
import classNames from 'classnames';
import {PokemonType} from '../../utils/interfaces';
import {Tag} from '../tag/tag';

interface PokemonCardTagsProps {
    types: PokemonType[];
}

export const PokemonCardTags = (props: PokemonCardTagsProps) => {
    const {types} = props;
    return (
        <div className="pokemon-card__tags">
            {types.map((item, index) => {
                const type = item.type.name;
                const classes = classNames(
                    'pokemon-card__tag',
                    `pokemon-card__tag_${type}`,
                );
                return (
                    <Tag text={type}
                         key={index}
                         className={classes}
                    />
                )
            })}
        </div>
    )
};