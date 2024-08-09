import './square.css';
import { useState } from 'react';

export function Square({clickBoard, turn}){

   let [square, setSquare] = useState("");
   let [classBackground, setClassBackground] = useState("square");

   const eventHandler = ()=>{
      clickBoard();
      setClassBackground("square square-selected");
      setSquare(turn);
   }

   return (
     <div onClick={eventHandler} className={classBackground}>
        {square}        
     </div>
   );  
}