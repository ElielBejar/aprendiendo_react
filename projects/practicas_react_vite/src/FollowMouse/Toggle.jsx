import './toggle.css';

export function Toggle({toggle, eventHandler}){

    return (
        <button className='toggle' onClick={eventHandler}>
           {toggle ? "Activado" : "Desactivado"}
        </button>
    );
}