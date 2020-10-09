import React, { useState } from 'react'
import './blankAnswer.css'

export default function Blank({
  text,
  marker,
  truth,
  isDisabled,
  onDisabled,
  setResult,
}) {
  const [variant, setVariant] = useState('inactive')

  function handleClick(truth) {
    setVariant('selected')
    onDisabled(true)

    setTimeout(() => {
      if (!truth) {
        setVariant('wrong')
      } else {
        setVariant('correct')
      }
    }, 1000)

    setTimeout(() => {
      setVariant('inactive')
      setResult(truth)
      onDisabled(false)
    }, 2000)
  }

  return (
    <div className={`blankAnswerOverlay blankAnswerOverlay_${variant}`}>
      <button
        className="blankAnswer"
        disabled={isDisabled}
        onClick={() => handleClick(truth)}
      >
        <svg
          className={`blankAnswerSvg blankAnswerSvg_${variant}`}
          width="373"
          height="72"
          viewBox="0 0 373 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z"
            fill="white"
            stroke="#D0D0D8"
          />
        </svg>
        <div className="blankAnswerText">
          <p>
            <span>{marker}</span>
            {text}
          </p>
        </div>
      </button>
    </div>
  )
}
