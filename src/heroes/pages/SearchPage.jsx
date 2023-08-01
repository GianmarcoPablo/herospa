import queryString from 'query-string'
import { HeroCard } from "../components"
import { useNavigate,useLocation } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { getHeroByName } from '../helpers'

const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const {q = ""} = queryString.parse(location.search)
    const heroes = getHeroByName(q)

    const {searchText,onInputChange} = useForm({
        searchText: '' 
    })

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if(searchText.trim().length <= 2){
            heroes.length = 0
        }
        navigate(`?q=${searchText.toLowerCase().trim()}`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className='row'>
            <div className='col-5'>
                <h4>Searching</h4>
                <hr />
                <form
                    onSubmit={onSearchSubmit}
                >
                    <input
                        type='text'
                        placeholder='Search a hero'
                        className='form-control'
                        name='searchText'
                        autoComplete='off'
                        value={searchText}
                        onChange={onInputChange}
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
                <h4>Results</h4>
                <hr />
                
                {
                    (q === '')
                    ? <div className='alert alert-info'>
                        Search a hero
                    </div>
                    : (heroes.length === 0)
                        ? <div className='alert alert-danger'>
                            There is no a hero with {q}
                        </div>
                        : <div className='alert alert-success'>
                            There is {heroes.length} heroes with {q}
                    </div>
                }

                {   
                    heroes.map(hero=>(
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }
                {/**<HeroCard /> */}
            </div>
        </div>
        </>
    )
}

export default SearchPage