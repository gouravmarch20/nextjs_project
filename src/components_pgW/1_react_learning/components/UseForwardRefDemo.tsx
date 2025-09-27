import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const childRef = useRef<any>(null);

  const handleClick = () => {
    // Call child’s function directly
    childRef.current?.sayHello();
  };

  return (
    <div>
      {/* <h2>Parent Component</h2> */}
      <button onClick={handleClick} className="border bg-amber-700 p-4">
        Call Child Method
      </button>
      <Child childRefT={childRef} />
    </div>
  );
};

export default Parent;
