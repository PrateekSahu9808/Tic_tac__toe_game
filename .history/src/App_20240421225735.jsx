import Player from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="x" />
          <Player initialName="Player 2" symbol="o" />
        </ol>
        <game
      </div>
    </main>
  );
}

export default App;
