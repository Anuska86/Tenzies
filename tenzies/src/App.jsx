import React from "react";
import Confetti from "react-confetti";
import "./index.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = React.useState(() => generateAllNewDice());

  const gameWon = dice.every(
    (die) => die.isHeld && die.value === dice[0].value
  );

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
    if (gameWon) {
      setDice(generateAllNewDice());
    } else {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
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
      {gameWon && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div className="game-container">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to keep its current
          value between rolls.
        </p>
        <div className="dice-grid">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
}

export default App;
