import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { TotalScoreContext } from '../../context/TotalScore'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

import './winnerPage.css'

export default function WinnerPage() {
  const [isTryAgain, setIsTryAgain] = useState(false)
  const [{ value }] = useContext(TotalScoreContext)

  function handleClick() {
    setIsTryAgain(true)
  }

  if (isTryAgain) {
    return <Redirect to="/game" />
  }
  return (
    <div className="container winContainer">
      <div className="contentOverlay">
        <div className="winLogoOverlay">
          <Logo />
        </div>
        <div className="contentBlock">
          <h1 className="winTitle">Total score:</h1>
          <p className="winEarned">
            $<span>{value}</span> earned
          </p>
          <Button text="Try Again" handleClick={handleClick} />
        </div>
      </div>
    </div>
  )
}
