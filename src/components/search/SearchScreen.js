import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { useMemo } from 'react';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    // console.log(queryString.parse(location.search));
    const { q='' } = queryString.parse(location.search);
    // console.log(q);

    const [formValue, handleInputChange] = useForm({searchText: q});
    const { searchText } = formValue;

    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(searchText);
        history.push(`?q=${searchText}`);
    }

    const filteredHeroes = useMemo(() => getHeroesByName(q), [q])
    // const filteredHeroes = getHeroesByName( searchText );

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <form onSubmit={ handleSearch }>
                        <input 
                            type='text'
                            name='searchText'
                            value={ searchText }
                            placeholder='Find your hero'
                            className='form-control'
                            onChange={ handleInputChange }
                            autoComplete='off'
                        />
                        <button
                            type='submit' 
                            className='btn m-1 btn-block btn-outline-primary'
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    {
                        ( q==='' ) && <div className='alert alert-info'>Search a hero</div>
                    }

                    {
                        ( q!=='' && filteredHeroes.length === 0 ) && <div className='alert alert-danger'>No heroes found that match '{q}' </div>
                    }

                    {
                        filteredHeroes.map( hero => <HeroCard key={hero.id} {...hero}/>) 
                    // ( filteredHeroes.length > 0 ) ? 
                    //     filteredHeroes.map( hero => <HeroCard key={hero.id} {...hero}/>) 
                    //     : <p> No se encontraron resultados </p>
                    }
                </div>
            </div>
        </div>
    )
}
