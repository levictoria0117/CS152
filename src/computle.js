import React, {useEffect} from 'react'
import useComputle from './/logic'
import Grid from './components/grid'
import Letters from './components/letters'

export default function Computle({solution}){
    const {currentGuess, guesses, turn, usedKeys, handleKeyup} = useComputle(solution)
    
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
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
            </div>
        </div>
    )
}