import React from 'react';

interface PokemonCardNameProps {
    name: string;
}

export const PokemonCardName = (props: PokemonCardNameProps) => {
    const {name} = props;
    return <h3 className="pokemon-card__name">{name}</h3>;
};