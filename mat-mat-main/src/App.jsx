import React from 'react';
import {connect} from 'react-redux';
import {AnimatePresence} from 'framer-motion';

import './App.css';

import Background from './components/Background';
import UserCard from './components/UserCard';
import Title from './components/Title';
import Menu from './components/Menu';
import GameSelector from './components/GameSelector';
import GameControls from './components/GameControls';
import QuestionMenu from './components/QuestionMenu';
import Question from './components/Question';
import EndGameStats from './components/EndGameStats';
import Footer from './components/Footer'

const App = ({game}) => {
  let upperBanner;
  if (game !== null&&!game.isFinished) {
    const currentQuestion = [game.questions[game.currentQuestion]];
    upperBanner = currentQuestion.map((question) => (
      <QuestionMenu key={question._id}>
        <Question />
      </QuestionMenu>
    ));
  } else {
    upperBanner = <Title />
  }
  return (
    <div style={{padding: '10px'}}>
      <Background />
      <UserCard />
      <AnimatePresence>
        {upperBanner}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {game === null ? (
          <Menu key="game-selector">
            <GameSelector />
          </Menu>
        ) : (
          <Menu key="controls">
            {
              game.isFinished ? <EndGameStats /> : <GameControls />
            }
          </Menu>
        )}
      </AnimatePresence>
      <Footer/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};

export default connect(mapStateToProps)(App);
