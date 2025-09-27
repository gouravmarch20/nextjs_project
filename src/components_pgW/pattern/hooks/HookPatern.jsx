"use client";
import React from "react";
import useCounter from "./useCounter";
const HookPatern = () => {
  const { count, increment, decrement } = useCounter(5);

  return (
    <div>
      <p>{count}</p>
      <button className="boarder p-2" onClick={increment}>
        +
      </button>
      <button className="boarder p-2" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default HookPatern;
