import React from 'react';
import './Board.css';
import FormOptionsGame from '../formOptionsGame/FormOptionsGame';
import TicTacToeGame from '../tictactoeGame/TicTacToeGame';

function Board() {
  const [gameState, setGameState] = React.useState('game');
  const [gameOptions, setGameOptions] = React.useState({
    playerName1: 'Player',
    playerName2: 'Player 2',
    numPlayer: 1,
  });

  const handleOptions = submitOptions => {
    setGameOptions(submitOptions);
    setGameState('game');
  };

  return (
    <div className="board">
      {gameState === 'preGame' ? (
        <FormOptionsGame onSubmit={handleOptions} />
      ) : gameState === 'game' ? (
        <TicTacToeGame optionsGame={gameOptions} />
      ) : null}
    </div>
  );
}

export default Board;
