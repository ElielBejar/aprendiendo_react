import { useState } from 'react';
import './board.css';
import './Square.jsx';
import { Square } from './Square.jsx';

export function Board(){
    let initialTurn = 'X';

    let initialBoard = Array(9).fill(null);

    let [board, setBoard] = useState(Array(9).fill(null));
    let [turn, setTurn] = useState(initialTurn);

    const check = (index, base, limit, sum)=>{
       let count = 0;
       for(let i = (index*base); i<=(limit+index); i+=sum){
        console.log(i);
        if(board[i] === turn){
          count++;
        }
       }
       console.log("termina el for");
       if(count == 3){
        return true;
      }else{
        return false;
      }
    }

    const hasWon = ()=>{
      //cada espacio del inLine es si hay 3 en linea en [horizontal, vertical, diagonal]
      let inLine = [false, false, false];
      let i = 0;
      while((inLine.every(e => e === false)) && i<3){
        inLine[0] = check(i, 3, 2, 1);//checkeo horizontal
        inLine[1] = check(i, 1, 6, 3);//checkeo vertical
        i++;
      }
      console.log(inLine);
      if(inLine.some(e => e === true)){
        return true;
      }else{
        return false;
      }
    }

    const clickBoard = (index)=>{
        setTurn((turn === 'X') ? 'O' : 'X'); 
        board[index] = turn;
        setBoard(board);
        console.log(board);
        if(hasWon()){
          alert(`Gano ${turn}`);
        };//detecta si alguno ganó
    }

    return (
      <section className="board">
         {initialBoard.map((_, index)=> {
           return (
             <Square key={index} clickBoard={clickBoard} turn={turn} index={index}>  
             </Square>
           );
         }
         )}
      </section>
    );
}