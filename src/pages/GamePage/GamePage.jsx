import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { TotalScoreContext } from '../../context/TotalScore'
import Answers from '../../components/Answers'
import Board from '../../components/Board'
import validateQuestions from '../../helpers/validateQuestions'
import createObjQuestions from '../../helpers/createObjQuestions'
import randomIndex from '../../helpers/getRandomIndex'
import createArrAnswers from '../../helpers/createArrAnswers'

import data from '../../data/questions.json'

export default function GamePage() {
  const [stopGame, setStopGame] = useState(false) //редирект
  const [objQuestions, setObjQuestions] = useState(null) //старт
  const [arrGrades, setArrGrades] = useState([]) //борд
  const [currentGradeIndex, setCurrentGradeIndex] = useState(0) //борд
  const [gradeQuestions, setGradeQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState(null) //текущий вопрос для локала
  const [textQuestion, setTextQuestion] = useState(null) //тег p
  const [arrAnswers, setArrAnswers] = useState([]) //вопросы
  const [currentScore, setCurrentScore] = useState(0) //просчет суммы
  const [, setTotalScoreState] = useContext(TotalScoreContext) //контекст

  useEffect(() => {
    const tempValidate = validateQuestions(data)
    const tempObj = createObjQuestions(tempValidate)
    setObjQuestions(tempObj)
  }, [])

  useEffect(() => {
    if (!objQuestions) {
      return
    }
    const keys = Object.keys(objQuestions)
    const grades = keys.map((item) => Number(item)).sort((a, b) => a - b)
    setArrGrades(grades)
    setGradeQuestions(objQuestions[grades[0]])
  }, [objQuestions])

  useEffect(() => {
    if (!gradeQuestions.length) {
      return
    }
    let index = 0
    if (gradeQuestions.length > 1) {
      index = randomIndex(gradeQuestions.length)
    }
    setRandomQuestion(gradeQuestions[index])
  }, [gradeQuestions])

  useEffect(() => {
    if (!randomQuestion) {
      return
    }

    const { question, answers } = randomQuestion

    setTextQuestion(question)
    setArrAnswers(createArrAnswers(answers))
  }, [randomQuestion])

  function setResult(result) {
    if (!result) {
      setStopGame(true)
      setTotalScoreState((state) => ({
        ...state,
        value: currentScore,
      }))
      return
    }
    if (currentGradeIndex + 1 < arrGrades.length) {
      setCurrentScore(arrGrades[currentGradeIndex])
      setGradeQuestions(objQuestions[arrGrades[currentGradeIndex + 1]])
      setCurrentGradeIndex(currentGradeIndex + 1)
    } else {
      setStopGame(true)
      setTotalScoreState((state) => ({
        ...state,
        value: arrGrades[currentGradeIndex],
      }))
    }
  }

  if (stopGame) {
    return <Redirect to="/win" />
  }

  return (
    <div>
      <div>
        <p>{textQuestion}</p>
        <Answers setResult={setResult} arrAnswers={arrAnswers} />
      </div>
      <div>
        <Board arrGrades={arrGrades} currentGradeIndex={currentGradeIndex} />
      </div>
    </div>
  )
}
