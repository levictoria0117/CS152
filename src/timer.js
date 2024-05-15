import React, {useEffect, useState} from 'react'

const Timer = (clickOn) => {
    const [count, setCount] = useState(60*1);
    const [display, setDisplay] = useState("");

    
    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            if(count > 0){
              setCount(count - 1);
              let seconds = count%60;
              let minutes = parseInt(count/60);
              if(seconds < 10){
                seconds = "0"+ seconds; 
              }
              if(minutes < 10){
                minutes = "0" + minutes;
              }
              setDisplay(minutes + ":" + seconds);
            } else {
                setDisplay("Game Over!");
            }
        }, 1000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className='timer'>
            <h2>Time: {display}</h2>
        </div>
    );
}

export default Timer;