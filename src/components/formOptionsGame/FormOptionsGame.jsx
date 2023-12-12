import React from 'react';
import { IoPersonSharp, IoPeopleSharp } from 'react-icons/io5';
import './FormOptionsGame.css';
import PropTypes from 'prop-types';

const FormOptionsGame = ({ onSubmit }) => {
  const [gameOptions, setGameOptions] = React.useState({
    player1: { name: 'Player', symbol: 'O' },
    player2: { name: 'Cpu', symbol: 'X' },
    numPlayer: 1,
  });

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(gameOptions);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setGameOptions(prevGameOptions => ({
      ...prevGameOptions,
      [name]: { ...prevGameOptions[name], name: value },
    }));
  };

  React.useEffect(() => {
    setGameOptions(prevGameOptions => ({
      ...prevGameOptions,
      player2: {
        ...prevGameOptions.player2,
        name: prevGameOptions.numPlayer === 2 ? 'Player 2' : 'Cpu',
      },
    }));
  }, [gameOptions.numPlayer]);

  const { player1, player2, numPlayer } = gameOptions;

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="inputs-container">
        <div className="name-input-container">
          <label htmlFor="player1">Name player</label>
          <input
            type="text"
            id="player1"
            name="player1"
            value={player1.name}
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
              name="player2"
              value={player2.name}
              onChange={handleChange}
              autoComplete="off"
            ></input>
          </div>
        ) : null}
      </div>

      <div className="numPlayer-buttons-container">
        <button
          className={numPlayer === 1 ? 'selected-button' : ''}
          type="button"
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
          type="button"
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
