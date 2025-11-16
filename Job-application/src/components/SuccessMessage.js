import React from "react";

const SuccessMessage = ({ handleReset }) => {
  return (
    <div data-testid="success-message">
      <h2>Application Submitted Successfully!</h2>
      <p>Thank you for your application. We will review it soon.</p>
      <button
        className="ma-auto"
        data-testid="reset-button"
        onClick={handleReset}
      >
        Home
      </button>
    </div>
  );
};

export default SuccessMessage;
