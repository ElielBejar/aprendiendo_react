import { useReloadImage } from "./hooks/useReloadImage.jsx";
import { useReloadFact } from "./hooks/useReloadFact.jsx";

export function App(){

    const {fact, updateFact} = useReloadFact();

    const {imageUrl} = useReloadImage({fact});

    const clickHandler = ()=>{
        updateFact();
    }

    return (
        <main>
            <h1>Prueba tecnica</h1>
            <button onClick={clickHandler}>Nuevo facto</button>
            <p>{fact}</p>
            <img src={imageUrl} alt="cat image" />
        </main>
    );
}