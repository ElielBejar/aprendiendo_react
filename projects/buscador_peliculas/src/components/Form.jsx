import '../styles/form.css';

export function Form({submitHandler}){

    return (
    <form onSubmit={submitHandler}>
        <h1>Buscador de peliculas</h1>
        <input type="text" name="movie_input" placeholder="Titanic, Harry Potter, Avengers..."/>
        <button type="submit">Search</button>
    </form>
    )
}