import React from 'react';
import './Board.css';
import FormOptionsGame from '../formOptionsGame/FormOptionsGame';
import TicTacToeGame from '../tictactoeGame/TicTacToeGame';

function Board() {
  const originalGameOptions = {
    player1: { name: 'Player', symbol: 'O' },
    player2: { name: 'Cpu', symbol: 'X' },
    numPlayer: 1,
  };

  const [gameState, setGameState] = React.useState('preGame');
  const [gameOptions, setGameOptions] = React.useState(originalGameOptions);

  const handleOptions = submitOptions => {
    setGameOptions(submitOptions);
    setGameState('game');
  };

  const handleReset = () => {
    setGameState('preGame');
    setGameOptions(originalGameOptions);
  };

  return (
    <div className="board">
      {gameState === 'preGame' ? (
        <FormOptionsGame onSubmit={handleOptions} />
      ) : gameState === 'game' ? (
        <TicTacToeGame optionsGame={gameOptions} onReset={handleReset} />
      ) : null}
    </div>
  );
}

export default Board;
