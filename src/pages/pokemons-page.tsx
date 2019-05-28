import React from 'react';
import {inject, observer} from 'mobx-react';
import {PokedexStore} from '../stores/pokedex';
import {AllStores} from '../utils/interfaces';
import {PokemonsList} from '../components/pokemons-list/pokemons-list';
import {Input} from '../components/inputs/input';

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
        const {filteredData} = this.props.store!;
        return (
            <>
                <Input onChange={this.onChangeInput}/>
                <PokemonsList list={filteredData}/>
            </>
        );
    }

    onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.store!.setFilterValue(e.target.value);
    }
}