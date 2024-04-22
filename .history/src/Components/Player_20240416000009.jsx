

const Player = ({name,sy}) => {
  return (
    <li>
      <span className="player">
        <span className="player-name">Player 1</span>
        <span className="player-symbol">X</span>
      </span>
      <button>edit</button>
    </li>
  );
};

export default Player;
