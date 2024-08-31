import { API_KEY, API_URL } from "../constants/apiKeys.js";

export async function fetchMovies(name) {
    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${name}`);
        const data = await response.json();
        return data; // Devuelve la data una vez que se haya resuelto
    } catch (error) {
        throw new Error(error);
    }
}