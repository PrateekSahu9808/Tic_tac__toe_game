import { useState } from "react";


const Player = ({name,symbol}) => {
 const[isEditing,setEditing]=useState(false)
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>edit</button>
    </li>
  );
};

export default Player;
