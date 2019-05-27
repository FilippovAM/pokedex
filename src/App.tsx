import React from 'react';
import './App.css';
import {configure} from 'mobx';
import {Provider} from 'mobx-react';
import pokedexStore from './stores/pokedex';
import PokemonsList from './components/pokemons-list';

configure({enforceActions: 'always'});

const App = () => {
    return (
        <Provider pokedexStore={pokedexStore}>
            <div className="App">
                <PokemonsList/>
            </div>
        </Provider>
    );
};

export default App;
