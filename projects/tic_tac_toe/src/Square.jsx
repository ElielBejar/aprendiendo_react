import './square.css';
import { useState } from 'react';

export function Square({clickBoard, turn, index}){


   let [square, setSquare] = useState("");//para poner X o O en el cuadrado
   let [classBackground, setClassBackground] = useState("square");//para modificar los estilos de una celda

   const eventHandler = ()=>{
      if(square == ""){
      clickBoard(index);//setea el turno
      setClassBackground("square square-selected");//setea la clase
      setSquare(turn);//pone la X o la O en el cuadrado 
      }
   }

   return (
     <div onClick={eventHandler} className={classBackground}>
        {square}        
     </div>
   );  
}