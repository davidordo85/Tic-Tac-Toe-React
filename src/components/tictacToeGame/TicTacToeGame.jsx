//import React from 'react';
import Player from '../player/Player';
import './TicTacToeGame.css';
import PropTypes from 'prop-types';

const TicTacToeGame = ({ optionsGame }) => {
  console.log(optionsGame);
  return (
    <div className="game-container">
      <div className="cell-1">
        <Player name={optionsGame.playerName1} symbol="O" />
      </div>
      <div className="cell-2"></div>
      <div className="cell-3">
        <Player name={optionsGame.playerName2} symbol="X" />
      </div>
      <div className="cell-4"></div>
      <div className="cell-5"></div>
      <div className="cell-6"></div>
      <div className="cell-7"></div>
      <div className="cell-8"></div>
      <div className="cell-9"></div>
      <div className="cell-10"></div>
      <div className="cell-11"></div>
      <div className="cell-12"></div>
    </div>
  );
};

TicTacToeGame.propTypes = {
  optionsGame: PropTypes.object.isRequired,
};

export default TicTacToeGame;
