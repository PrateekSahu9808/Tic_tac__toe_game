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
   <li key={}></li>
   )
  }
  </ol>;
};

export default GameBoard;
