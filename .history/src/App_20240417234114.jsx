import Player from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="x" />
          <Player name="Player 2" symbol="o" />
        </ol>
        Game Board!!
      </div>
    </main>
  );
}

export default App;
