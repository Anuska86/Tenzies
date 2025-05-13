import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./index.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = React.useState(() => generateAllNewDice());
  const [rollCount, setRollCount] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const buttonRef = React.useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gameWon = dice.every(
    (die) => die.isHeld && die.value === dice[0].value
  );

  //Timer
  useEffect(() => {
    let timer;
    if (isTimerRunning) {
      timer = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning]);

  useEffect(() => {
    if (gameWon) {
      setIsTimerRunning(false);
      buttonRef.current.focus();
    }
  }, [gameWon]);

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
      setRollCount(0);
      setTimeElapsed(0);
      setIsTimerRunning(false);
    } else {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
      setRollCount((prevCount) => prevCount + 1);
      if (!isTimerRunning) {
        setIsTimerRunning(true);
      }
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
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <h2 className="win-message">
            You won!Press "New Game" if you want to start again
          </h2>
        )}
      </div>

      <div className="game-container">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to keep its current
          value between rolls.
        </p>
        <div className="stats_container">
          <div className="timer">Time Elapsed: {timeElapsed}s</div>
          <div className="roll-counter">Roll Count: {rollCount}</div>
        </div>
        <div className="dice-grid">{diceElements}</div>
        <button ref={buttonRef} className="roll-button" onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
}

export default App;
