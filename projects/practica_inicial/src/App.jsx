//import { Button } from "./Button";
//import {Board} from './TicTacToe/Board.jsx';
import { useEffect, useState } from 'react';
import { Follower } from './FollowMouse/Follower.jsx';
import {Toggle} from './FollowMouse/Toggle.jsx';

function App() {

  let [toggle, setToggle] = useState(false);
  let [coords, setCoords] = useState({x:0, y:0});

  function moveHandler(event){

    setCoords({x:event.clientX, y:event.clientY});
    
  }

  useEffect(()=>{
     if(toggle){
     document.addEventListener("mousemove", moveHandler);
     }

     return ()=>{
      document.removeEventListener("mousemove", moveHandler);
     }

  }, [toggle]);

  function clickHandler(){
    setToggle(!toggle);
  }

  return (
    <>
    <Follower coords={coords}></Follower>  
    <Toggle toggle={toggle} eventHandler={clickHandler}></Toggle>
    </>
  );
}

export default App;
