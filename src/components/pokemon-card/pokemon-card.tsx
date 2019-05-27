import React from 'react';
import './pokemon-card.scss';
import {PokemonType} from '../../utils/interfaces';
import {PokemonCardName} from './pokemon-card-name';
import {PokemonCardAvatar} from './pokemon-card-avatar';
import {PokemonCardTags} from './pokemon-card-tags';

export interface PokemonCardProps {
    id: string;
    name: string;
    img: string;
    types: PokemonType[];
}

export const PokemonCard = (props: PokemonCardProps) => {
    const {name, id, img, types = []} = props;

    return (
        <div className="pokemon-card" id={id}>
            <div className="pokemon-card__content">
                <PokemonCardName name={name}/>
                <PokemonCardAvatar name={name} img={img}/>
                <PokemonCardTags types={types}/>
            </div>
        </div>
    )
};