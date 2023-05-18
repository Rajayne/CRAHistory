import React from "react";
import useCounter from "./useCounter";

const Counter = ({ color }) => {
  const [count, inc, dec] = useCounter(0);

  return (
    <div>
      <h1 style={{ color: color }}>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={dec}>- 1</button>
      <button onClick={inc}>+ 1</button>
    </div>
  );
};

export default Counter;
