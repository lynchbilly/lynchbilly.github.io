import React, {useState} from 'react';
import {connect} from 'react-redux';
import {X, ChevronLeft, ChevronRight, UserPlus, Play} from 'react-feather';


import {modes} from '../model/modes';
import createGame from '../util/createGame';
import {createNewGame, updateCurrentUser} from '../actions';
import Button from './Button';
import './GameSelector.css';



const MAX_TABLE_NUMBER = 12;
const NUMBER_OF_QUESTIONS = 6;

const GameSelector = ({previousUserName, createNewGame, updateCurrentUser}) => {
  const [mode, setMode] = useState(0);
  const [tableNumber, setTableNumber] = useState(2);
  // const [questionNumber, setQuestionNumber] = useState(10);
  const [userName, setUserName] = useState(previousUserName);

  const handleSubmit = () => {
    updateCurrentUser({
      userName,
      picture: 0,
    });
    const newGame = createGame(
      modes[mode].name,
      tableNumber,
      userName,
      NUMBER_OF_QUESTIONS
    );
    createNewGame(newGame);
  };

  const incrementMode = () => {
    setMode(mode === modes.length - 1 ? 0 : mode + 1);
  };
  const decrementMode = () => {
    setMode(mode === 0 ? modes.length - 1 : mode - 1);
  };
  const incrementTableNumber = () => {
    setTableNumber(tableNumber === MAX_TABLE_NUMBER ? 2 : tableNumber + 1);
  };
  const decrementTableNumber = () => {
    setTableNumber(tableNumber === 2 ? MAX_TABLE_NUMBER : tableNumber - 1);
  };

  return (
    <div className="game-selector">
      <div
        className="type-selector__container"
      >
        <label className="game-selector__label text">
           Tria un repte
        </label>
        <div className="type-selector">
          <Button onClick={decrementMode} direction="left">
            <ChevronLeft className="white" />
          </Button>
          <div className="type-selector__panel">{modes[mode].symbol}</div>
          <Button onClick={incrementMode} direction="right">
            <ChevronRight className="white" />
          </Button>
        </div>
      </div>
      {modes[mode].name === 'multiply' && (
        <div
        className="type-selector__container"
        >
          <label className="game-selector__label text">
            <X className="inline-margin" /> Taula del
          </label>
          <div className="type-selector">
            <Button onClick={decrementTableNumber} direction="left">
              <ChevronLeft className="white" />
            </Button>
            <div className="type-selector__panel white text">{tableNumber}</div>
            <Button onClick={incrementTableNumber} direction="right">
              <ChevronRight className="white" />
            </Button>
          </div>
        </div>
      )}
      <div className="submit-area">
        <label className="game-selector__label text">
          <UserPlus className="inline-margin" /> Nom
        </label>
        <input
          className="game-selector__input  text white"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <Button direction="right" onClick={handleSubmit}>
          <Play />
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  previousUserName: state.currentUser ? state.currentUser.userName : 'Jugador/a'
})

export default connect(mapStateToProps, {createNewGame, updateCurrentUser})(
  GameSelector
);
