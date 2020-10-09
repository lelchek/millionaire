import React from 'react'
import BlankGrade from '../BlankGrade'
import './boardGrade.css'

export default function Board({ arrGrades, currentGradeIndex }) {
  return (
    <ul className="boardGrade">
      {arrGrades.map((item, index) => {
        let variant = 'normal'
        if (index < currentGradeIndex) {
          variant = 'disactive'
        }
        if (index === currentGradeIndex) {
          variant = 'active'
        }
        return <BlankGrade key={item} text={item} variant={variant} />
      })}
    </ul>
  )
}
