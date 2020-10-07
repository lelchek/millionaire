import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { TotalScoreContext } from '../../context/TotalScore'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

export default function WinnerPage() {
  const [isTryAgain, setIsTryAgain] = useState(false)
  const [{ value }] = useContext(TotalScoreContext)

  function handleClick() {
    setIsTryAgain(true)
  }

  useEffect(() => {
    // console.log('totalScoreState', totalScoreState.value)
  }, [])

  if (isTryAgain) {
    return <Redirect to="/game" />
  }
  return (
    <div>
      <Logo />
      <div>
        <h1>Total score:</h1>
        <p>
          $<span>{value}</span> earned
        </p>
        <Button text="Try Again" handleClick={handleClick} />
      </div>
    </div>
  )
}
