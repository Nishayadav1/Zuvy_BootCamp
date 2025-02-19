import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stopWatch.css'

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const handleStopwatchStart = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
  };

  const handleStopwatchStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    handleStopwatchStop();
    setTimer(0);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card text-center bg-transparent border border-dark rounded custom-shadow">
        <div className="card-header bg-transparent">
          <h1 className="mb-0 text-white fw-bolder">Stopwatch</h1>
        </div>
        <div className="card-body">
          <p className="display-4 text-white fw-bolder">{timer} s</p>
          <div className="d-flex justify-content-center gap-2">
            <button onClick={handleStopwatchStart} className="btn btn-success">
              Start
            </button>
            <button onClick={handleStopwatchStop} className="btn btn-danger">
              Stop
            </button>
            <button onClick={handleReset} className="btn btn-warning">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
