import React from 'react'

export default function Row({guess, normalMode, wordLength}){

    if (!normalMode){
        if (guess){
            return (
                <div className='row past'>
                    {guess.map((l, i) => (<div key={i} className={l.color}></div>))}
                </div>
            )
        }
    }
    else{
        if (guess){
            return (
                <div className='row past'>
                    {guess.map((l, i) => (<div key={i} className={l.color}>{l.key}</div>))}
                </div>
            )
        } 
    }

    if(wordLength == 6){
        return (
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
    else if(wordLength == 7){
        return (
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
    else if(wordLength == 8){
        return (
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
    else{
        return (
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}