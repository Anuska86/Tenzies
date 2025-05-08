import React from "react";
import "./index.css";
import Die from "./components/Die";

function App() {
  return (
    <main>
      <div className="game-container">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-grid">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        </div>
        <button className="roll-button">Roll</button>
      </div>
    </main>
  );
}

export default App;
