import React from 'react'

export default function EndMessage({ isCorrect, solution, turn }) {
  return (
    <div>
      {isCorrect && (
        <div>
          success!!!
          You found the solution in {turn} guesses
        </div>
      )}
      {!isCorrect && (
        <div>
          game over...
          the word you were trying to guess was {solution}
        </div>
      )}
    </div>
  )
}
