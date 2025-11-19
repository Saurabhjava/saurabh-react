import React, { useRef } from "react";

function CounterWithoutRender() {
  const counter = useRef(0);

  const increase = () => {
    counter.current += 1;
    console.log("Counter:", counter.current);
  };

  return (
    <div>
        <h1>{counter.current}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default CounterWithoutRender;
