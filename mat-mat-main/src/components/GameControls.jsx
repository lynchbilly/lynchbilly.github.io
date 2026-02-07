import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './GameControls.css';

import Button from './Button';
import {Delete, ChevronsRight} from 'react-feather';
import {
  updateUserAnswer,
  updateAnswerIsCorrect,
  goToTheNextQuestion,
} from '../actions';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const GameControls = ({
  userAnswer,
  correctAnswer,
  isCorrect,
  updateUserAnswer,
  updateAnswerIsCorrect,
  goToTheNextQuestion,
}) => {
  const handleNumberClick = (number) => {
    if (userAnswer === null) {
      updateUserAnswer(number);
    } else {
      updateUserAnswer(parseInt(`${userAnswer}${number}`));
    }
  };
  const handleAnswerSubmit = () => {
    if (userAnswer === correctAnswer) {
      updateAnswerIsCorrect(true);
    } else {
      updateAnswerIsCorrect(false);
    }
  };
  useEffect(() => {
    if (userAnswer === correctAnswer) {
      updateAnswerIsCorrect(true);
    }
  }, [userAnswer, correctAnswer, updateAnswerIsCorrect]);

  if (isCorrect === null) {
    return (
      <div className="game-controls">
        {numbers.map((number) => (
          <Button
            key={number}
            className={number === 0 && 'number-0'}
            onClick={() => handleNumberClick(number)}
            direction={'rounded'}
          >
            <span className="game-controls__numbers">{number}</span>
          </Button>
        ))}
        <Button direction={'rounded'} onClick={() => updateUserAnswer(null)}>
          <Delete className={'icon--big'} />
        </Button>
        <Button
          direction={'rounded'}
          className={'next-question-button'}
          onClick={handleAnswerSubmit}
        >
          <ChevronsRight className={'icon--big'} />
        </Button>
      </div>
    );
  } else if (isCorrect === true) {
    return (
      <div className="game-controls">
        
        <Button className="grid-full-width" direction={'rounded'} onClick={goToTheNextQuestion}>
          <ChevronsRight className={'icon--big'} />
        </Button>
      </div>
    );
  } else if (isCorrect === false) {
    return (
      <div className="game-controls">
        <h2 className="header grid-full-width" >Resposta correcta: {correctAnswer}</h2>
        <Button className="grid-full-width" direction={'rounded'} onClick={goToTheNextQuestion}>
          <ChevronsRight className={'icon--big'} />
        </Button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {currentQuestion} = state.game;
  return {
    userAnswer: state.game.questions[currentQuestion].answer,
    correctAnswer: state.game.questions[currentQuestion].correctAnswer,
    isCorrect: state.game.questions[currentQuestion].isCorrect,
  };
};

export default connect(mapStateToProps, {
  updateUserAnswer,
  updateAnswerIsCorrect,
  goToTheNextQuestion,
})(GameControls);
