import React from "react";
const initialGameBoard=[
 [],[],[]
]

const GameBoard = () => {
  return <ol id="game-board">
   <li><ol>
    <li></li>
    <li></li>
    <li></li></ol></li>
   <li></li>
   <li></li>
  </ol>;
};

export default GameBoard;
