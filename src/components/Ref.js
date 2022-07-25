import React, { useState, useEffect, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const id = React.useRef(null);

  const clearInterval = () => {
    window.clearInterval(id.current);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return clearInterval;
  }, []);

  return (
    <div>
      <h1>Using useRef - keep the value after re-render</h1>
      <h2>{count}</h2>
      <p>Press Stop button to stop counting</p>
      <button onClick={clearInterval}>Stop</button>
    </div>
  );
};

export default Counter;
