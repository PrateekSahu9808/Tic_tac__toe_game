import { useState } from "react";


const Player = ({name,symbol}) => {
 const[isEditing,setEditing]=useState(false);
 const handleEditClick=()=>{
  setEditing(true)
 }

  return (
    <li>
      <span className="player">
       
       {isEditing ?  <span className="player-name">{name}</span> : <input type="text" required/>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{?"edit":""}</button>
    </li>
  );
};

export default Player;
