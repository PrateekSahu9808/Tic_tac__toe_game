import { useState } from "react";

const Player = ({ initialName, symbol,isActive,onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  console.log("🚀 ~ Player ~ playerName:", playerName)
  
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // setIsEditing(isEditing? false:true)
    // setIsEditing(!isEditing );
    setIsEditing((editing) => !editing);

      onChangeName(symbol,playerName)
   
  };
  const handleChange = event => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isActive?'active': undefined }>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
};

export default Player;
