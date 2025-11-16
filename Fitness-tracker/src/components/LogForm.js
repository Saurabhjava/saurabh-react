// components/LogForm.js
import React, { useState } from "react";

const LogForm = ({ onAddLog, onReset, error }) => {
  const [exerciseType, setExerciseType] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLog(exerciseType, Number(duration), Number(caloriesBurned));
    setExerciseType("");
    setDuration("");
    setCaloriesBurned("");
  };

  return (
    <div className="layout column justify-content-center align-items-center">
      <form data-testid="log-form" onSubmit={handleSubmit}>
        <div className="mb-10">
          <label>
            Exercise Type:
            <input
              type="text"
              name="exerciseType"
              value={exerciseType}
              placeholder="e.g., Running"
              className="ml-50"
              data-testid="input-exerciseType"
              onChange={(e) => setExerciseType(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-10">
          <label>
            Duration (minutes):
            <input
              type="number"
              name="duration"
              value={duration}
              placeholder="e.g., 30"
              className="ml-10"
              data-testid="input-duration"
              onChange={(e) => setDuration(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-10">
          <label>
            Calories Burned:
            <input
              type="number"
              name="caloriesBurned"
              value={caloriesBurned}
              placeholder="e.g., 300"
              className="ml-30"
              data-testid="input-caloriesBurned"
              onChange={(e) => setCaloriesBurned(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" data-testid="btn-logActivity" className="mr-10">
          Log Activity
        </button>
        <button type="button" data-testid="btn-resetLog" onClick={onReset}>
          Reset Log
        </button>
      </form>
      {error && (
        <p data-testid="error-message" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default LogForm;
