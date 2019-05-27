import React from 'react';

interface PokemonCardAvatarProps {
    name: string;
    img: string;
}

export const PokemonCardAvatar = (props: PokemonCardAvatarProps) => {
    const {name, img} = props;
    return <img className="pokemon-card__avatar" src={img} alt={name}/>;
};