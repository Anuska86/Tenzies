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

 const diceElements = dice.map((num, index) => <Die key={index} value={num} />);
  function rollDice() {
    setDice((prevDice) => prevDice.map(() => Math.ceil(Math.random() * 6)));
  }

  return (
    <main>
      <div className="game-container">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to keep its
          current value between rolls.
        </p>
        <div className="dice-grid">
          {diceElements}
        </div>
        <button className="roll-button" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default App;
