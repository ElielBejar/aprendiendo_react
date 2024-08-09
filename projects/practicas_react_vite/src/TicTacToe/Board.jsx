import './board.css';
import './Square.jsx';
import { Square } from './Square.jsx';

export function Board(){
    const board = Array(9).fill(null);

    return (
      <section className="board">
         {board.map((_, index)=> {
           return (
             <Square>
                
             </Square>
           );
         }
         )}
      </section>
    );
}