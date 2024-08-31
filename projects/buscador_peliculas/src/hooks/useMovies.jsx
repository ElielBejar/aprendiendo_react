import { useState, useEffect } from "react";
import { fetchMovies } from "../logics/apiMovies.js";

export function useMovies(name){
    const [movies, setMovies] = useState(null);

    async function getMovies(name){
        const newMovies = await fetchMovies(name);
        setMovies(newMovies);
    }

    useEffect(()=>{
        getMovies(name);
    }, [name]);

    return movies;
}