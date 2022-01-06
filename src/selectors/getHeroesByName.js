import { heroes } from "../data/heroes";

export const getHeroesByName = ( searchText ) => {

    if ( searchText === '')  {
        return [];
    }
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(searchText.toLowerCase()) );
}