import React from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null], 
];

const GameBoard = () => {
  return <ol id="game-board">
  {
   initialGameBoard
  }
  </ol>;
};

export default GameBoard;
