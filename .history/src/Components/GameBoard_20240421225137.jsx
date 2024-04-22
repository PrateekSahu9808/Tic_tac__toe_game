import React from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null], 
];

const GameBoard = () => {
  return <ol id="game-board">
  {
   initialGameBoard.map(())
  }
  </ol>;
};

export default GameBoard;
