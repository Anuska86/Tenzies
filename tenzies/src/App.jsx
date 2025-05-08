import React from "react";
import "./index.css";

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
          {/* Example dice elements */}
          <div className="dice">1</div>
          <div className="dice">2</div>
          <div className="dice">3</div>
          <div className="dice">4</div>
          <div className="dice">5</div>
        </div>
        <button className="roll-button">Roll</button>
      </div>
    </main>
  );
}

export default App;
