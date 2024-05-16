import React, { useEffect, useState } from 'react';
import useComputle from './logic';
import Grid from './components/grid';
import Letters from './components/letters';
import EndMessage from './components/endmessage';

export default function Computle({ solution, normalMode, wordLength}) {
  const { currentGuess, guesses, turn, usedKeys, isCorrect, handleKeyup } = useComputle(solution);
  const [showMessage, setShowMessage] = useState(false);

// export default function Computle({solution, n, gameOver, normalMode, wordLength}){
//     const {currentGuess, guesses, turn, usedKeys, isCorrect, handleKeyup} = useComputle(solution, n)
//     const [showMessage, setShowMessage] = useState(false)
//     const [timeGame, setTimeGame] = useState(gameOver);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    if (isCorrect || turn > 5) {
      setTimeout(() => setShowMessage(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  if (!normalMode) {
    return (
      <div>
        <div className="container">
          <div className="maincontent">
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} normalMode={normalMode}/>
          </div>
        </div>

        <div className="input">
          <div>welcome to hard mode of computle! there won't be a color coded chart on the side and the 
            letters will not appear on the grid.</div>
          <div>good luck!!</div>
          <br></br>
          <div>enter your guess: {currentGuess}</div>
          <br />
          {showMessage && <EndMessage isCorrect={isCorrect} turn={turn} solution={solution}/>}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="maincontent">
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} normalMode={normalMode} wordLength={wordLength}/>
        </div>

        <div className="sidecontainer">
          <div>letters used</div>
          <div className="letters">
            <Letters usedKeys={usedKeys} />
          </div>
          {/* <div>
            <div className="timer">Timer</div>
          </div> */}
        </div>
      </div>

      <div className="input">
        <div>welcome to computle!</div>
        <div>enter your guess: {currentGuess}</div>
        <br />
        {showMessage && <EndMessage isCorrect={isCorrect} turn={turn} solution={solution} />}
      </div>
    </div>
  );
}
