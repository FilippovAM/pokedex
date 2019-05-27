import {action, observable} from 'mobx';
import {accumulateArray} from '../utils/functions';
import {PokemonData} from '../utils/interfaces';

const POKEDEX_API_URL = `https://pokeapi.co/api/v2/pokemon/`;

export class PokedexStore {
    @observable isLoading: boolean = false;
    @observable data: PokemonData[] = [];

    fetchData = (start: number = 1, end: number = 100) => {
        this.setLoading(true);

        // temp data
        const promises: any[] = [];
        const tempData: PokemonData[] = [];

        for (let i = start; i <= end; i++) {
            const promise = fetch(POKEDEX_API_URL + i)
                .then(response => response.json())
                .then(response => accumulateArray(tempData, response));
            promises.push(promise);
        }

        Promise.all([...promises])
            .then(() => {
                this.setData(tempData.sort((itemA, itemB) => itemA.order - itemB.order));
                this.setLoading(false);
            });
    }

    @action
    setData = (data: PokemonData[]) => {
        this.data = data;
    }

    @action
    setLoading = (value: boolean) => {
        this.isLoading = value;
    }
}

const pokedexStore = new PokedexStore();

export default pokedexStore;