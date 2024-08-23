import { columnCheck, rowCheck, diagonalCheck1, diagonalCheck2 } from "../constants/consts";

export const hasWon = (board, turn)=>{
    //cada espacio del inLine es si hay 3 en linea en [horizontal, vertical, diagonal]
    console.log(board);
    let inLine = [false, false, false];
    let i = 0;
    while((inLine.every(e => e === false)) && i<3){
      inLine[0] = check(board, turn, i, rowCheck);//checkeo horizontal
      inLine[1] = check(board, turn, i, columnCheck);//checkeo vertical
      //cada diagonal se checkea por separado, una vez
      if(i == 0){
        inLine[2] = check(board, turn, i, diagonalCheck1);
      }else if(i == 2){
        inLine[2] = check(board, turn, i, diagonalCheck2);
      }
      
      i++;
    }
    if(inLine.some(e => e === true)){
      return true;
    }else{
      return false;
    }
}

export const showWin = (newBoard, turn)=>{
    if(hasWon(newBoard, turn)){
        alert(`Gano ${turn}`);
    }//detecta si alguno ganó
}

const check = (board, turn, index, typeCheck)=>{
    let count = 0;
    for(let i = (index*typeCheck.BASE); i<=(typeCheck.LIMIT+typeCheck.BASE*index); i+=typeCheck.SUM){
     console.log(board);
     console.log(turn);
     if(board[i] === turn){
       count++;
     }
    }
    if(count == 3){
     return true;
   }else{
     return false;
   }
 }