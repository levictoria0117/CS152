import { useEffect, useState } from "react";
import Computle from './computle';
import Timer from './timer';

function App() {
  const [solution, setSolution] = useState(null);
  const [timerOn, setTimerOn] = useState(false);
  const [normalMode, setNormalMode] = useState(true);
  const [wordLength, setWordLength] = useState(5);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json => {
      const random = json[Math.floor(Math.random()*json.length)]
      setSolution(random.word)
    })
  },[]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="menu">
          <h1>computle</h1> <br></br>

          <h2>menu</h2>
          <details>
            <summary>
              <span className="icon">﹥</span>
              <h3>how to play</h3>
            </summary>
            <p>
              To begin, enter your guess in the terminal.
              The panel above will display your guess in a grid.
            </p>
            <p>The letters will be color coded to indicate the following:</p>
            <p>RED: The letter is incorrect and not in the word.</p>
            <p>YELLOW: The letter is in the word, but not in the correct place.</p>
            <p>GREEN: The letter is in the word and is in the correct place.</p>
            <p>Refreshing the page will restart the entire game and give you a new word.</p>
          </details>

          <details>
            <summary>
              <span className="icon">﹥</span>
              <h3>difficulty</h3>
            </summary>

            <p>
              <button className="modes" onClick={() => {
                setNormalMode(true);
                setTimerOn(false);
                setWordLength(5)
              }}>5-letter words</button>

              <button className="modes" onClick={() => {
                setNormalMode(true);
                setTimerOn(false);
                setWordLength(6)
              }}>6-letter words</button>

              <button className="modes" onClick={() => {
                setNormalMode(true);
                setTimerOn(false);
                setWordLength(7)
              }}>7-letter words</button>

              <button className="modes" onClick={() => {
                setNormalMode(true);
                setTimerOn(false);
                setWordLength(8)
              }}>8-letter words</button>

            <details>
                <summary>
                  <span className="icon2">﹥</span>
                  <button className="modes" onClick={() => {
                    setTimerOn(timerOn => !timerOn);
                  }}>timed mode</button>
                </summary>
                  <p>
                    Want a challenge? This mode has the same gameplay as the normal mode. 
                    But now you're in a race against the clock! Enter your own time or try to solve
                    the puzzle in 1 minute. Simply click to enable or disable the timer.
                  </p>
              </details>

              <details>
                <summary>
                  <span className="icon2">﹥</span>
                  <button className="modes" onClick={() => {
                    setNormalMode(false);
                  }}>hard mode</button>
                </summary>
                  <p>
                    Have good memory? Hard mode hides the color coded letter chart
                    and the letters won't show up on the grid. You'll have to remember
                    what words you've tried and which letters are correct.
                  </p>
              </details>
            </p>
          </details>

          <details>
            <summary>
              <span className="icon">﹥</span>
              <h3>about</h3>
            </summary>
            <p>A Wordle variant centered around computer science terms.</p>
            <p>Created by Joshua Tanaka and Victoria Le</p>
            <a href="https://github.com/levictoria0117/CS152" target="_blank">GitHub Repository</a>
          </details>
          
        </div>
        <div className="mainbackground">
          <h2>
            {timerOn && <Timer />}
            {solution && <Computle solution={solution} normalMode={normalMode} wordLength={wordLength}/>}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
