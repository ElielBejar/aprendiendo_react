import { useSearch } from '../hooks/useSearch.jsx';
import '../styles/form.css';

export function Form({submitHandler}){

    const [search, error, changeHandler] = useSearch();

    return (
    <form onSubmit={submitHandler}>
        <h1>Buscador de peliculas</h1>
        <input type="text" onChange={changeHandler} value={search} name="movie_input" placeholder="Titanic, Harry Potter, Avengers..."/>
        <button type="submit">Search</button>
        <p style={{'color':'red'}}>{error}</p>
    </form>
    )
}