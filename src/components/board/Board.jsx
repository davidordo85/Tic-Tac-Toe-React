import React from 'react';
import './Board.css';
import FormOptionsGame from '../formOptionsGame/FormOptionsGame';

function Board() {
  const [gameState, setGameState] = React.useState('preGame');
  return (
    <div className="board">
      {gameState === 'preGame' ? <FormOptionsGame /> : null}
    </div>
  );
}

export default Board;
