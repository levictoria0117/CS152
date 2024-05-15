import React, {useEffect, useState} from 'react'
import useComputle from './/logic'
import Grid from './components/grid'
import Letters from './components/letters'
import EndMessage from './components/endmessage'

export default function Computle({solution, n, gameOver}){
    const {currentGuess, guesses, turn, usedKeys, isCorrect, handleKeyup} = useComputle(solution, n)
    const [showMessage, setShowMessage] = useState(false)
    const [timeGame, setTimeGame] = useState(gameOver);
    
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        if (isCorrect) {
            setTimeout(() => setShowMessage(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }
        if (turn > n) {
            setTimeout(() => setShowMessage(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    return (
        <div>
            <div class="container">
                <div class="maincontent">
                    <Grid currentGuess={currentGuess} guesses ={guesses} turn={turn}/>
                </div>

                <div class="letters">
                    <div>letters used</div>
                    <Letters usedKeys = {usedKeys}/>
                </div>
            </div>
            

            <div class="input">
                <div>welcome to computle!</div>
                <div>enter your guess:{currentGuess}</div>
                <br></br>
                {showMessage && <EndMessage isCorrect={isCorrect} turn={turn} solution={solution} />}
            </div>
        </div>
    )
}