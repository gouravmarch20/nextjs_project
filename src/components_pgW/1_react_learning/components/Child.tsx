import React, { useImperativeHandle } from "react";

const Child = ({ childRefT  }) => {
  const sayHello = () => {
    alert("Hello from child!");
  };

  useImperativeHandle(childRefT, () => ({
    sayHello,
  }));

  return <div>Child</div>;
};

export default Child;
