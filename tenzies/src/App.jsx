import React from "react";
import "./index.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }

    return newDice;
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => (die === 1 ? die : Math.ceil(Math.random() * 6)))
    );
  }

  return (
    <main>
      <div className="game-container">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-grid">
          {dice.map((die, index) => (
            <Die key={index} value={die} />
          ))}
        </div>
        <button className="roll-button" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default App;
