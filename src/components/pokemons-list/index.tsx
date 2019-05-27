import React from 'react';
import {inject, observer} from 'mobx-react';
import {PokemonsList} from './pokemons-list';
import {PokedexStore} from '../../stores/pokedex'
import {AllStores} from '../../utils/interfaces';

interface ComponentProps {
    store?: PokedexStore;
}

@inject(allStores => ({
    store: (allStores as AllStores).pokedexStore
}))

@observer
export default class Component extends React.Component<ComponentProps> {
    componentWillMount() {
        this.props.store!.fetchData();
    }

    render() {
        const {data} = this.props.store!;
        return (
            <PokemonsList list={data}/>
        );
    }
}