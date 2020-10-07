import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

export default function StartPage() {
  const [isStart, setIsStart] = useState(false)
  function handleClick() {
    setIsStart(true)
  }

  if (isStart) {
    return <Redirect to="/game" />
  }

  return (
    <div>
      <Logo />
      <div>
        <h1>Who wants to be a millionaire?</h1>
        <Button text="Start" handleClick={handleClick} />
      </div>
    </div>
  )
}
