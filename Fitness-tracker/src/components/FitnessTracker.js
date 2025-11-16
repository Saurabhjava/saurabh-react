// components/FitnessTracker.js
import React, { useState } from "react";
import LogForm from "./LogForm";
import LogList from "./LogList";

const FitnessTracker = () => {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");

  const addLog = (exerciseType, duration, caloriesBurned) => {
    // validation
    if (!exerciseType.trim()) {
      setError("Exercise type must not be empty.");
      return;
    }
    if (!duration || duration <= 0) {
      setError("Duration must be a positive number.");
      return;
    }
    if (!caloriesBurned || caloriesBurned <= 0) {
      setError("Calories must be a positive number.");
      return;
    }

    const newLog = { exerciseType, duration, caloriesBurned };
    setLogs([...logs, newLog]);
    setError(""); // clear error
  };

  const resetLog = () => {
    setLogs([]);
    setError("");
  };

  return (
    <div className="pa-20">
      <h1>Track Your Fitness</h1>
      <LogForm onAddLog={addLog} onReset={resetLog} error={error} />
      <LogList logs={logs} />
    </div>
  );
};

export default FitnessTracker;
