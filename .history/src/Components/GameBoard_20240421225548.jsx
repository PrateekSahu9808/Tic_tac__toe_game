import React from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null], 
];

const GameBoard = () => {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, index) => (
        <li key={index}>
          <ol>{row.map((col,index)=><li key={index}>
           
          </li>)}</ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
