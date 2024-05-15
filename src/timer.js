import React, {useEffect, useState} from 'react'

const Timer = (props) => {
    const [count, setCount] = useState(60);
    const [display, setDisplay] = useState("");
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if(count > 0){
              setCount(count - 1);
              let seconds = count % 60;
              let minutes = parseInt(count / 60);
              if(seconds < 10){
                seconds = "0"+ seconds; 
              }
              if(minutes < 10){
                minutes = "0" + minutes;
              }
              setDisplay(minutes + ":" + seconds);
            } else {
                setDisplay("Game Over!");
                setGameOver(true)
            }
        }, 1000);
 
        
        return () => clearInterval(interval);
    }, [count, props, gameOver]);

    return (
        <div className='timer'>
            <h2>Time: {display}</h2>
            {props.handleCallback(gameOver)}
        </div>
    );
}

export default Timer;