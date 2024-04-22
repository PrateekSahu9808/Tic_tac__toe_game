

const Player = ({name,symbol}) => {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Save</button>
    </li>
  );
};

export default Player;
