import React, { useEffect, useState } from 'react'
import UseWordle from '../../Hooks/UseWordle'
import Grid from '../Grid/Grid'
import Modal from '../Modal/Modal'

const Wordle = ({solution}) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = UseWordle(solution)
    const[showModal, setShowModal] = useState(false)
    
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
          console.log('Well done! You guessed today\'s word correctly')
          setTimeout(() => setShowModal(true), 500)
          window.removeEventListener('keyup', handleKeyup)
        }

        if (turn > 5) {
          console.log('Nice try, but you ran out of guesses... Better luck next time!')
          setTimeout(() => setShowModal(true), 500)
          window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    useEffect(() => {
      console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
}

export default Wordle