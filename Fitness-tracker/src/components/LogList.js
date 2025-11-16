import React from "react";
import "../App.css";

const LogList = ({ logs }) => {
  return (
    <div data-testid="log-list">
      <h2>Activity Log</h2>
      {logs.length === 0 ? (
        <p>No activities logged yet.</p>
      ) : (
        <ul className="pl-0 log-entry-ul">
          {logs.map((log, index) => (
            <li
              key={index}
              data-testid="log-entry"
              className="log-entry-li mb-10 pa-10"
            >
              <p>
                <strong>Exercise:</strong> {log.exerciseType}
              </p>
              <p>
                <strong>Duration:</strong> {log.duration} minutes
              </p>
              <p>
                <strong>Calories Burned:</strong> {log.caloriesBurned} kcal
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogList;
