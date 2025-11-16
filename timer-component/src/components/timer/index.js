import React, { useState, useEffect } from "react";
import "./index.css";

export default function Timer({ initial }) {
  const [timerValue, setTimerValue] = useState(initial);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId = null;

    if (isRunning && timerValue > 0) {
      intervalId = setInterval(() => {
        setTimerValue((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, timerValue]);

  const handleStopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className="mt-100 layout-column align-items-center justify-content-center">
      <div className="timer-value" data-testid="timer-value">
        {timerValue}
      </div>
      <button
        className="large"
        data-testid="stop-button"
        onClick={handleStopTimer}
        disabled={!isRunning || timerValue === 0}
      >
        Stop Timer
      </button>
    </div>
  );
}
