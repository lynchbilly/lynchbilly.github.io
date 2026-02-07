import types from '../types';

export const updateCurrentUser = (user) => {
  return {
    type: types.UPDATE_CURRENT_USER,
    payload: user,
  };
};

export const createNewGame = (game) => {
  return {
    type: types.CREATE_NEW_GAME,
    payload: game,
  };
};
export const updateUserAnswer = (answer) => {
  return {
    type: types.UPDATE_USER_ANSWER,
    payload: answer,
  };
};
export const updateAnswerIsCorrect = (isCorrect) => ({
  type:types.UPDATE_ANSWER_IS_CORRECT,
  payload: isCorrect,
})
export const goToTheNextQuestion = () => ({
  type: types.GO_TO_THE_NEXT_QUESTION,
})
export const archiveCurrentGame = (game) => ({
  type: types.ARCHIVE_CURRENT_GAME,
  payload: game,
})


