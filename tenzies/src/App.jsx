import React from "react";
import "./index.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function holdDice(id) {
    console.log(id);
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      hold={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      <div className="game-container">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to keep its current
          value between rolls.
        </p>
        <div className="dice-grid">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default App;
