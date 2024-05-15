import { useEffect, useState } from "react";
import Computle from './computle';
import Timer from './timer';
import endGame from './timer';
function App() {

  const [solution, setSolution] = useState(null);
  const [timerOn, setTimerOn] = useState(false);
  const [mode, setMode] = useState(6);
  const [jsonSolution, setJsonSolution] = useState('http://localhost:3001/' + mode + '-solutions')
  const [endGame, setEndGame] = useState(false);
  function CallBack(childData){
    return(
      setEndGame(childData)
    )
  }
  useEffect(() => {
    fetch(jsonSolution)
    .then(res => res.json())
    .then(json => {
      const random = json[Math.floor(Math.random()*json.length)]
      setSolution(random.word)
    })
  },[setSolution])

  return (
    <div className="App">
      <div class="wrapper">
        <div class="menu">
          <h1>computle</h1> <br></br>

          <h2>menu</h2>
          <details>
            <summary>
              <span class="icon">﹥</span>
              <h3>how to play</h3>
            </summary>
            <p>
              <h2>To begin, enter your guess in the terminal.</h2>
              <h2>The panel above will display your guess in a grid.</h2>
              <h2>The letters will be color coded to indicate the following:</h2>
              <h2>RED: The letter is incorrect and not in the word.</h2>
              <h2>YELLOW: The letter is in the word, but not in the correct place.</h2>
              <h2>GREEN: The letter is in the word and is in the correct place.</h2>
              <h2>Refreshing the page will restart the entire game and give you a new word.</h2>
            </p>
          </details>

          <details>
            <summary>
              <span class="icon">﹥</span>
              <h3>difficulty</h3>
            </summary>
            <p>
              <h2 onClick = {()=>{
                setMode(5);
              }}>5-letter words</h2>
              <h2 onClick = {()=>{
                setMode(6);
              }}>6-letters words</h2>
              <h2 onClick = {()=>{
                setMode(7);
              }}>7-letters words</h2>
              <h2 onClick = {()=>{
                setMode(8);
              }}>8-letters words</h2>
              <h2 onClick = {() =>{
                setTimerOn(timerOn => {
                  return !timerOn;
                });
              }}>timed mode</h2>
              <h2>hard mode</h2>
              <h2>multiplayer mode</h2>
            </p>
          </details>

          <details>
            <summary>
              <span class="icon">﹥</span>
              <h3>about</h3>
            </summary>
            <p>
              <h2>A Wordle variant centered around computer science terms.</h2>
              <h2> Created by Joshua Tanaka and Victoria Le</h2>
            </p>
          </details>
          
        </div>
        <div class="mainbackground">
          <h2>
            {solution && <Computle solution = {solution} n = {mode} gameOver = {false}/>}
            {timerOn && <Timer handleCallback = {CallBack}/>} 
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App
