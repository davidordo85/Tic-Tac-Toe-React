//import React from 'react';
import PropTypes from 'prop-types';
import './MessageForResultGame.css';

function MessageForResultGame({ message, onReset, onReload }) {
  return (
    <div className="message-container">
      <p>{message}</p>
      <div className="button-message-container">
        <button className="button-restart" onClick={onReset}>
          Restart
        </button>
        <button onClick={onReload}>Reload</button>
      </div>
    </div>
  );
}

MessageForResultGame.propTypes = {
  message: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  onReload: PropTypes.func.isRequired,
};

export default MessageForResultGame;
