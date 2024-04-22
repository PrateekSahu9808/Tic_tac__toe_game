import { useState } from "react";


const Player = ({name,symbol}) => {
 const[isEditing,setEditing]=useState(false);
 const handleEditClick=()=>{

 }
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={}>edit</button>
    </li>
  );
};

export default Player;
