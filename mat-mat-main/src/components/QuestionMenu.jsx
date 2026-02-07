import React from 'react';
import {motion} from 'framer-motion';
import {connect} from 'react-redux';

import './QuestionMenu.css';

const QuestionMenu = ({children, isCorrect}) => {
  const isCorrectClassName =
    isCorrect === true
      ? 'question-menu--is-correct'
      : isCorrect === false
      ? 'question-menu--is-not-correct'
      : '';

  const isCorrectIcon =
    isCorrect === true ? (
      <svg
        className="is-correct-icon is-correct-icon--green"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ) : isCorrect === false ? (
      <svg
        className="is-correct-icon is-correct-icon--red"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    ) : null;

  return (
    <motion.div
      initial={{scale: 0, opacity: 0, x: '-50%'}}
      animate={{scale: 1, opacity: 1, x: '-50%'}}
      exit={{opacity: 0, x: '-50%'}}
      className={`question-menu ${isCorrectClassName}`}
    >
      {isCorrectIcon}
      {children}
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  isCorrect: state.game.questions[state.game.currentQuestion].isCorrect,
});

export default connect(mapStateToProps)(QuestionMenu);
