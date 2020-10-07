import React from 'react'
import Blank from '../Blank'

export default function Board({ arrGrades, currentGradeIndex }) {
  return (
    <>
      <div>
        {arrGrades.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <Blank />
      <div>{arrGrades[currentGradeIndex]}</div>
    </>
  )
}
