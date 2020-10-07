import React, { useEffect } from 'react'
import Blank from '../Blank'

export default function Answers({ arrAnswers, setResult }) {
  useEffect(() => {
    console.log('arrAnswers', arrAnswers)
    // createArrAnswers()
  }, [arrAnswers])
  return (
    <div>
      {arrAnswers.map((item, index) => (
        <div key={index} onClick={() => setResult(item.truth)}>
          {item.text}
        </div>
      ))}
      <Blank />
    </div>
  )
}
