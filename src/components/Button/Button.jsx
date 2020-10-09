import React from 'react'
import './button.css'

export default function Button({ text, handleClick }) {
  return (
    <button className="mainButton" onClick={handleClick}>
      {text}
    </button>
  )
}
