import React from 'react'
import Row from './row'

export default function Grid({guesses, normalMode, wordLength}){
    return (
        <div>
            {guesses.map((g,i) => {return <Row key={i} guess={g} normalMode={normalMode} wordLength={wordLength}/>})}
        </div>
    )
}