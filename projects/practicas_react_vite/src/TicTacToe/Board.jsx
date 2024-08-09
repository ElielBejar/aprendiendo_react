import { useState } from 'react';
import './board.css';
import './Square.jsx';
import { Square } from './Square.jsx';

export function Board(){
    const board = Array(9).fill(null);
    let initialTurn = 'X';

    let [turn, setTurn] = useState(initialTurn);

    const clickBoard = ()=>{
        setTurn((turn === 'X') ? 'O' : 'X'); 
    }

    return (
      <section className="board">
         {board.map((_, index)=> {
           return (
             <Square key={index} clickBoard={clickBoard} turn={turn}>  
             </Square>
           );
         }
         )}
      </section>
    );
}