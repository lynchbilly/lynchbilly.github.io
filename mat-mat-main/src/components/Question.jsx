import React from 'react'
import { connect } from 'react-redux'

import {modes} from '../model/modes'
import './Question.css'

export const Question = ({mode, number1, number2, answer, isCorrect}) => {
  const operationSymbol = modes.filter((item) => item.name === mode)[0].symbol
  answer = answer === null ? '_' : answer
  return (
    <div className="question">
      {number1}{operationSymbol}{number2} = {answer}
    </div>
  )
}

const mapStateToProps = (state) => {
  const {mode, questions, currentQuestion} = state.game;
  const {number1, number2, answer, isCorrect} = questions[currentQuestion]
  return {mode, number1, number2, answer, isCorrect}
}

export default connect(mapStateToProps)(Question)
