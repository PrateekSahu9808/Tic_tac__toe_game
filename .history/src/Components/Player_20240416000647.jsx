import { useState } from "react";


const Player = ({name,symbol}) => {
 const[isEditing,setEditing]=useState(false);
 const handleEditClick=()=>{
  set
 }
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>edit</button>
    </li>
  );
};

export default Player;
