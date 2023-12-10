import React from 'react';
import { IoPersonSharp, IoPeopleSharp } from 'react-icons/io5';
import './FormOptionsGame.css';
import PropTypes from 'prop-types';

const FormOptionsGame = ({ onSubmit }) => {
  const [gameOptions, setGameOptions] = React.useState({
    playerName1: 'Player',
    playerName2: 'Player 2',
    numPlayer: 1,
  });

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(gameOptions);
  };

  const handleChange = event => {
    setGameOptions(oldGameOptions => {
      const newGameOptions = {
        ...oldGameOptions,
        [event.target.name]: event.target.value,
      };
      return newGameOptions;
    });
  };

  const { playerName1, playerName2, numPlayer } = gameOptions;

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="inputs-container">
        <div className="name-input-container">
          <label htmlFor="player1">Name player</label>
          <input
            type="text"
            id="player1"
            name="playerName1"
            value={playerName1}
            onChange={handleChange}
            autoComplete="off"
          ></input>
        </div>
        {gameOptions.numPlayer > 1 ? (
          <div className="name-input-container two">
            <label htmlFor="player2">Name player 2</label>
            <input
              type="text"
              id="player2"
              name="playerName2"
              value={playerName2}
              onChange={handleChange}
              autoComplete="off"
            ></input>
          </div>
        ) : null}
      </div>

      <div className="numPlayer-buttons-container">
        <button
          className={numPlayer === 1 ? 'selected-button' : ''}
          onClick={() =>
            setGameOptions(prevGameOptions => ({
              ...prevGameOptions,
              numPlayer: 1,
            }))
          }
        >
          <IoPersonSharp />
        </button>
        <button
          className={numPlayer === 2 ? 'selected-button' : ''}
          onClick={() =>
            setGameOptions(prevGameOptions => ({
              ...prevGameOptions,
              numPlayer: 2,
            }))
          }
        >
          <IoPeopleSharp />
        </button>
      </div>
      <button className="button-start" type="submit">
        Start Game
      </button>
    </form>
  );
};

FormOptionsGame.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormOptionsGame;
