import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { TotalScoreContext } from '../../context/TotalScore'
import Answers from '../../components/Answers'
import Board from '../../components/BoardGrade'
import validateQuestions from '../../helpers/validateQuestions'
import createObjQuestions from '../../helpers/createObjQuestions'
import randomIndex from '../../helpers/getRandomIndex'
import createArrAnswers from '../../helpers/createArrAnswers'

import './gamePage.css'

import data from '../../data/questions.json'

export default function GamePage() {
  const [isOpenBoard, setIsOpenBoard] = useState('hidden')
  const [stopGame, setStopGame] = useState(false)
  const [objQuestions, setObjQuestions] = useState(null)
  const [arrGrades, setArrGrades] = useState([])
  const [currentGradeIndex, setCurrentGradeIndex] = useState(0)
  const [gradeQuestions, setGradeQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState(null)
  const [textQuestion, setTextQuestion] = useState(null)
  const [arrAnswers, setArrAnswers] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [, setTotalScoreState] = useContext(TotalScoreContext)

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
    <div className="gameContainer">
      <div className="gameContentBlock">
        <p className="gameQuestion">{textQuestion}</p>
        <div className="answersBlock">
          <Answers setResult={setResult} arrAnswers={arrAnswers} />
        </div>
        <button
          className="gameButton openBoardButton"
          onClick={() => setIsOpenBoard('active')}
        />
      </div>

      <div className={`boardBlock boardBlock_${isOpenBoard}`}>
        <Board arrGrades={arrGrades} currentGradeIndex={currentGradeIndex} />
        <button
          className="gameButton closeBoardButton"
          onClick={() => setIsOpenBoard('hidden')}
        />
      </div>
    </div>
  )
}
