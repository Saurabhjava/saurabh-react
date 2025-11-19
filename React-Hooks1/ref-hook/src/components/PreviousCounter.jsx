import React, { useState, useEffect, useRef } from "react";

function PreviousCounter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);
  useEffect(() => {
    prevCount.current = count; // store previous value
  }, [count]);

  return (
    <div>
      <h3>Current: {count}</h3>
      <h3>Previous: {prevCount.current}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousCounter;
