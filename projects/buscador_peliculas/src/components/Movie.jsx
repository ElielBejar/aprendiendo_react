export function Movie({infoMovie}){
   return (<li>
    <img src={infoMovie.Poster} alt={infoMovie.Title} />
    <b>{infoMovie.Title}</b>
    <br />
    <span>{infoMovie.Year}</span>
   </li>)
}