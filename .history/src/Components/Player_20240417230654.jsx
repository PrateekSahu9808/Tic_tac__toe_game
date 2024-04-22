import { useState } from "react";


const Player = ({name,symbol}) => {
 const[isEditing,setIsEditing]=useState(false);
 const handleEditClick=()=>{
  setEditing(true)
 }

  return (
    <li>
      <span className="player">
       
       {isEditing ?  <span className="player-name">{name}</span> : <input type="text" required value={name}/>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing?"save":"edit"}</button>
    </li>
  );
};

export default Player;
