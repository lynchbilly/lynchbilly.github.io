import React from 'react';
import {connect} from 'react-redux';
import {Check, X, ChevronsRight} from 'react-feather';

import {archiveCurrentGame} from '../actions';
import {modes} from '../model/modes';

import Button from './Button';
import './EndGameStats.css';

const EndGameStats = ({game, mode, questions, archiveCurrentGame}) => {
  
  if (game) {
    const operationSymbol = modes.filter((item) => item.name === mode)[0].symbol;
    return (
    <div className="end-game-stats">
      <h2 className="header">Felicitats!</h2>
      <p className="text">Aquests són els teus resultats:</p>
      <table className="end-game-stats__table">
        <thead>
          <tr>
            <th>Pregunta</th>
            <th>Resposta</th>
            <th>Resposta correcta</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => {
            const {
              _id,
              number1,
              number2,
              answer,
              correctAnswer,
              isCorrect,
            } = question;
            return (
              <tr key={_id}>
                <td className="operation-doomsday">
                  {number1}
                  {operationSymbol}
                  {number2}
                </td>
                <td>{answer}</td>
                <td>{correctAnswer}</td>
                <td>{isCorrect ? <Check /> : <X/>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        direction={'rounded'}
        className="end-game-stats__button"
        onClick={() => archiveCurrentGame(game)}
      >
        <ChevronsRight className={'icon--big'} />
      </Button>
    </div>
  )} else return null;
};

const mapStateToProps = (state) => ({
  game: state.game,
  mode: state.game&&state.game.mode,
  questions: state.game&&state.game.questions,
});

export default connect(mapStateToProps, {archiveCurrentGame})(EndGameStats);
