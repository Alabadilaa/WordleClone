import React, { useEffect } from 'react'
import UseWordle from '../../Hooks/UseWordle'

const Wordle = (solution) => {
    const { currentGuess, handleKeyup } = UseWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

  return (
    <div>Wordle</div>
  )
}

export default Wordle