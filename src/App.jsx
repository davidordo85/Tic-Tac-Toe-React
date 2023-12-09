import { Board } from './components';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">TIC-TAC-TOE</h1>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default App;
