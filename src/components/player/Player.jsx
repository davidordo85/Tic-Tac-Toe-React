//import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';

const Player = ({ name, symbol }) => {
  return (
    <div className="player">
      <div className="symbol">{symbol}</div>
      <div className="name">{name}</div>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Player;
