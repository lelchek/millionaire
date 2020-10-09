import React, { useState } from 'react'
import BlankAnswer from '../BlankAnswer'

const ENUM = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
}

export default function Answers({ arrAnswers, setResult }) {
  const [isDisabled, setIsDisabled] = useState(false)

  function handleDisabled(value) {
    setIsDisabled(value)
  }

  return (
    <>
      {arrAnswers.map((item, index) => (
        <BlankAnswer
          key={ENUM[index]}
          marker={ENUM[index]}
          text={item.text}
          truth={item.truth}
          setResult={setResult}
          onDisabled={handleDisabled}
          isDisabled={isDisabled}
          variant="blankAnswer"
        />
      ))}
    </>
  )
}
