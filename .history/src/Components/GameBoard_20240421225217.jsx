import React from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null], 
];

const GameBoard = () => {
  return <ol id="game-board">
  {
   initialGameBoard.map((row)=>
   <li></li>
   )
  }
  </ol>;
};

export default GameBoard;
