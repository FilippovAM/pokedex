import {PokedexStore} from '../stores/pokedex';
import {PokemonDataSprites} from './enums';

export interface AllStores {
    pokedexStore: PokedexStore;
}

export interface PokemonData {
    name: string;
    id: string;
    sprites: {
        [PokemonDataSprites.FRONT_DEFAULT]: string;
    };
    order: number;
    types: PokemonType[];
}

export interface PokemonType {
    type: {
        name: string;
    };
}