import React, { useEffect } from 'react'
import UseWordle from '../../Hooks/UseWordle'

const Wordle = ({solution}) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = UseWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
      console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
    </div>
  )
}

export default Wordle