store = {
  users: [
    
  ],
  currentUser: {
    userName: '',
    picture: 0,
  },
  game: {
    _id: 'game-',
    userName: '',
    mode: '', // fa falta crear una llista de modes
    table: '', // la taula de multiplicar, altrament "null"
    numberOfQuestions: 0, // el número de preguntes que hi ha al joc
    isFinished: false,
    points: 0,
    currentQuestion: 0,
    questions: [
      {
        _id: 'question-',
        number1: 0,
        number2: 0,
        answer: 0,
        correctAnswer: 0,
        isCorrect: true / false / undefined,
      },
    ],
  },
  gamesHistory: [],
};

/*

<a href="https://www.vecteezy.com/free-vector/exact">Exact Vectors by Vecteezy</a>

<a href="https://www.vecteezy.com/free-vector/exact">Exact Vectors by Vecteezy</a>

Colors: #FF08D7 - 25CED8 - cadefc - 574f7d - 4f3a65








*/
