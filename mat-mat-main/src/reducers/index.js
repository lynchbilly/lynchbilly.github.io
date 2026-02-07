import {combineReducers} from 'redux';
import types from '../types';

const currentUserReducer = (currentUser = null, action) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_USER:
      return action.payload;
    default:
      return currentUser;
  }
};

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_USER:
      return [...users, action.payload];
    default:
      return users;
  }
};

const gameReducer = (game = null, action) => {
  switch (action.type) {
    case types.CREATE_NEW_GAME:
      return action.payload;

    case types.UPDATE_USER_ANSWER:
      if (action.payload !== null && action.payload.toString().length > 3) {
        return game;
      }
      const newGame = {...game};
      newGame.questions[game.currentQuestion].answer = action.payload;
      return newGame;

    case types.UPDATE_ANSWER_IS_CORRECT:
      const newGame1 = {...game};
      newGame1.questions[game.currentQuestion].isCorrect = action.payload;
      return newGame1;

    case types.GO_TO_THE_NEXT_QUESTION:
      if (game.currentQuestion + 1 === game.numberOfQuestions) {
        return {
          ...game,
          isFinished: true,
        };
      } else {
        return {
          ...game,
          currentQuestion: game.currentQuestion + 1,
        };
      }

    case types.ARCHIVE_CURRENT_GAME:
      return null;
    default:
      return game;
  }
};

const gamesHistoryReducer = (state = [], {type, payload}) => {
  switch (type) {
    case types.ARCHIVE_CURRENT_GAME:
      return [...state, payload];

    default:
      return state;
  }
};

export default combineReducers({
  currentUser: currentUserReducer,
  users: usersReducer,
  game: gameReducer,
  gamesHistory: gamesHistoryReducer,
});
