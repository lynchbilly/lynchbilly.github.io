import {v4 as uuidv4} from 'uuid';

export default function createGame(mode, tableNumber, userName, numberOfQuestions) {

  const modeOperations = {
    'multiply': (number1, number2) => number1 * number2,
    'add': (number1, number2) => number1 + number2,
    'subtract': (number1, number2) => number1 - number2,
    'divide': (number1, number2) => number1 / number2,
  };

  if(mode !== "multiply"){
    tableNumber = null;
  }

  const questions = [];
  for (let i = 0; i < numberOfQuestions; i++) {
    let number1 = tableNumber
      ? tableNumber
      : 1 + Math.floor(Math.random() * 12);
    let number2 = 1 + Math.floor(Math.random() * 12);
    if (mode === 'divide') {
      number1 = number2 * Math.floor(Math.random() * 10); // If we divide, number1 must be divisible by number1
    } else if (mode === 'subtract') {
      number2 = Math.floor(Math.random() * number1); // If we subtract, number2 cannot be higher than number1
    }

    questions.push({
      _id: 'question-' + uuidv4(),
      number1,
      number2,
      answer: null,
      correctAnswer: modeOperations[mode](number1, number2),
      isCorrect: null,
    });
  }

  return {
    _id: 'game-' + uuidv4(),
    userName,
    mode,
    tableNumber, // la taula de multiplicar, altrament "null"
    numberOfQuestions, // el número de preguntes que hi ha al joc
    currentQuestion: 0, 
    isFinished: false,
    points: 0,
    questions,
  };
}
