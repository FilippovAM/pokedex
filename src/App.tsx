import React from 'react';
import './App.css';
import {configure} from 'mobx';
import {Provider} from 'mobx-react';
import pokedexStore from './stores/pokedex';
import PokemonsPage from './pages/pokemons-page';

configure({enforceActions: 'always'});

const App = () => {
    return (
        <Provider pokedexStore={pokedexStore}>
            <div className="App">
                <PokemonsPage/>
            </div>
        </Provider>
    );
};

export default App;
