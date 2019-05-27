import React from 'react';
import {PokemonCard} from '../pokemon-card/pokemon-card';
import {PokemonData} from '../../utils/interfaces';
import './pokemons-list.scss';

interface PokemonsListProps {
    list: PokemonData[];
}

export const PokemonsList = (props: PokemonsListProps) => {
    const list = props.list.slice();
    const hasData = !!list.length;

    return (
        hasData ? (
            <div className="pokemons-list">
                {list.map((item: PokemonData) => {
                    return (
                        <PokemonCard name={item.name}
                                     img={item.sprites.front_default}
                                     key={item.name}
                                     id={item.id}
                                     types={item.types}
                        />
                    )
                })}
            </div>
        ) : <div>No data</div>
    )
};