import { Movie } from "./Movie.jsx";
import { useMovies } from "../hooks/useMovies.jsx";

import "../styles/moviesGrid.css";

export function MoviesGrid({name}){
    
   let movies = useMovies(name);

    return (
        <div>
           <ul>
           {(movies != undefined && movies.Search != undefined) ? movies.Search.map((_, index)=>{
            return (<Movie key={movies.Search[index].imdbID} infoMovie={movies.Search[index]}></Movie>)
           }): "No hay peliculas"}
           </ul>
        </div>
    );
}