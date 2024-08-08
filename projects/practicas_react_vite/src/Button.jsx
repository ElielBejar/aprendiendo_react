import './button.css';
import { useState } from 'react';

export function Button({children, classButton}){

    let local_count = 0;

    let [count, setCount] = useState(local_count);

    const eventHandler = () => {
        setCount( count => count + 1);
    };

    return (
        <button className={classButton} onClick={eventHandler}>
           Contador: {count}
        </button>
    );
}