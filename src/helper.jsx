export const isWinner = (gameBoard,currentMove,currentPlayer) => {
    let board =[...gameBoard];
    board[currentMove]=currentPlayer;
    
    const winLines = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,16],
        [3,6,9,12],

    ];
    for(var i =0;i<winLines.length;i++){
        const [c1,c2,c3,c4]= winLines[i];
        if(board[c1]> 0 && 
            board[c1]=== board[c2]&&
            board[c2]=== board[c3]&&
            board[c3]===board[c4]
            ){
                return true;
            }
            
    }
    return false;

  
}

export const isGameDraw = (gameBoard,currentMove,currentPlayer)=>{
    let board =[...gameBoard];
    board[currentMove]=currentPlayer;
 let count=   board.reduce((x,y)=> x+(y===0),0);
    return count===0;
}

 const getRandomComputerMove = (gameBoard) =>{
    let validMoves = [];
    for(let  i =0;i<gameBoard.length;i++){

        if(gameBoard[i]===0){
            validMoves.push(i);
        }
    }
    let rndMOve =Math.floor(Math.random() * validMoves.length);
    return validMoves[rndMOve];
}
const getPosition = (gameBoard, moveChecks) => {
    for (let check = 0; check < moveChecks.length; check++) {
      for (let i = 0; i < moveChecks[check].max; i += moveChecks[check].step) {
        const series =
          gameBoard[moveChecks[check].indexes[0] + i].toString() +
          gameBoard[moveChecks[check].indexes[1] + i].toString() +
          gameBoard[moveChecks[check].indexes[2] + i].toString() +
          gameBoard[moveChecks[check].indexes[3] + i].toString();
  
        switch (series) {
          case "1110":
          case "2220":
            return moveChecks[check].indexes[3] + i;
          case "1101":
          case "2202":
            return moveChecks[check].indexes[2] + i;
          case "1011":
          case "2022":
            return moveChecks[check].indexes[1] + i;
          case "0111":
          case "0222":
            return moveChecks[check].indexes[0] + i;
          default:
            // Do nothing or handle the default case if needed
        }
      }
    }
    return -1;
  };
  
  export const getComputerMove = (gameBoard) => {
    const moveChecks = [
      {
        indexes: [0, 4, 8, 12],
        max: 4,
        step: 1
      },
      {
        indexes: [0, 1, 2, 3],
        max: 16,
        step: 4
      },
      {
        indexes: [0, 5, 10, 15],
        step: 16,
        max: 16
      },
      {
        indexes: [3, 6, 9, 12],
        max: 16,
        step: 16
      }
    ];
  
    const position = getPosition(gameBoard, moveChecks);
    if (position > -1) {
      return position;
    }
    return getRandomComputerMove(gameBoard);
  };