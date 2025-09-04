import React from "react";
import VirtualListC from "./VirtualList";

const VirtualList = () => {
  const LIST =  Array.from({ length: 100 }, (_, ind) => ind);
  return (
    <div>
      <VirtualListC />
    </div>
  );
};

export default VirtualList;
