import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [time, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    if (!timerOn) return;

    const interval = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          setTimerOn(false);
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    
    <div className="timer-container">
      <div className="timer-box">
      <h1>CountDown</h1>
        <input
          type="number"
          className="timer-input"
          placeholder="Enter seconds"
          onChange={(e) => setTimer(Number(e.target.value) || 0)}
        />

        <div className="timer-buttons">
          <button className="timer-button start-button" onClick={() => setTimerOn(true)}>
            Start
          </button>
          <button className="timer-button stop-button" onClick={() => setTimerOn(false)}>
            Stop
          </button>
        </div>

        <div className="timer-display">⏳ {time}s</div>
      </div>
    </div>
  );
}

export default Timer;
