import React from 'react';
import Player from '../player/Player';
import './TicTacToeGame.css';
import PropTypes from 'prop-types';
import MessageForResultGame from '../messageForResultGame/MessageForResultGame';

const TicTacToeGame = ({ optionsGame, onReset }) => {
  const [gameOver, setGameOver] = React.useState(false);
  const [cellContents, setCellContents] = React.useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = React.useState(optionsGame.player1);
  const [messageResultGame, setMessageResultGame] = React.useState('');

  const handleCellClick = index => {
    if (gameOver || cellContents[index] !== null) {
      return;
    }

    const updatedCellContents = [...cellContents];
    updatedCellContents[index] = currentPlayer.symbol;
    setCellContents(updatedCellContents);
    checkWinner(updatedCellContents);

    setCurrentPlayer(
      currentPlayer === optionsGame.player1
        ? optionsGame.player2
        : optionsGame.player1,
    );

    const winner = checkWinner(updatedCellContents);
    if (winner) {
      setMessageResultGame(winner);
      setGameOver(true);
    }
  };

  const checkWinner = cells => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        const winnerSymbol = cells[a];
        const winner = optionsGame[`player${winnerSymbol === 'O' ? '1' : '2'}`];
        return `¡Player ${winner.name} has won!`;
      }
    }

    if (cells.every(cell => cell !== null)) {
      return 'Tie! The game ends in a draw.';
    }

    return null;
  };

  const handleReload = () => {
    setCellContents(Array(9).fill(null));
    setCurrentPlayer(optionsGame.player1);
    setGameOver(false);
    setMessageResultGame('');
  };

  const performAIMove = () => {
    console.log('Performing AI move');
    const emptyCells = cellContents.reduce((acc, cell, index) => {
      if (cell === null) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (emptyCells.length > 0) {
      for (const index of emptyCells) {
        const testBoard = [...cellContents];
        testBoard[index] = optionsGame.player2.symbol;

        if (
          checkWinner(testBoard) ===
          `¡Player ${optionsGame.player2.name} has won!`
        ) {
          handleCellClick(index);
          return;
        }
      }

      for (const index of emptyCells) {
        const testBoard = [...cellContents];
        testBoard[index] = optionsGame.player1.symbol;

        if (
          checkWinner(testBoard) ===
          `¡Player ${optionsGame.player1.name} has won!`
        ) {
          handleCellClick(index);
          return;
        }
      }

      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const aiMove = emptyCells[randomIndex];
      handleCellClick(aiMove);
    }
  };

  if (
    optionsGame.numPlayer === 1 &&
    currentPlayer === optionsGame.player2 &&
    !gameOver
  ) {
    setTimeout(function () {
      {
        performAIMove();
      }
    }, 500);
  }

  return (
    <div className="game-container">
      <div className="cell-1">
        <Player
          name={optionsGame.player1.name}
          symbol={optionsGame.player1.symbol}
        />
      </div>
      <div className="cell-2">
        {gameOver ? (
          <MessageForResultGame
            message={messageResultGame}
            onReload={handleReload}
            onReset={onReset}
          />
        ) : null}
      </div>
      <div className="cell-3">
        <Player
          name={optionsGame.player2.name}
          symbol={optionsGame.player2.symbol}
        />
      </div>
      {Array.from({ length: 9 }, (_, index) => (
        <div
          key={index}
          className={`cell-${index + 4} cell-game`}
          onClick={() => handleCellClick(index)}
        >
          {cellContents[index] && (
            <span className="symbol">{cellContents[index]}</span>
          )}
        </div>
      ))}
    </div>
  );
};

TicTacToeGame.propTypes = {
  optionsGame: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default TicTacToeGame;
