import React from 'react';
import './Board.css';
import FormOptionsGame from '../formOptionsGame/FormOptionsGame';

function Board() {
  const [gameState, setGameState] = React.useState('preGame');
  const [gameOptions, setGameOptions] = React.useState({});

  const handleOptions = submitOptions => {
    console.log(submitOptions);
    setGameOptions(submitOptions);
    setGameState('game');
  };

  console.log(gameOptions);

  return (
    <div className="board">
      {gameState === 'preGame' ? (
        <FormOptionsGame onSubmit={handleOptions} />
      ) : gameState === 'game' ? (
        <p>game</p>
      ) : null}
    </div>
  );
}

export default Board;
