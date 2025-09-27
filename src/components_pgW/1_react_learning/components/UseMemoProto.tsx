import React, { useState } from "react";
import useMemoPolyfill from "../hooks/useMemoPolyfill";
const UseMemoProto = () => {
  const [cnt, setCnt] = useState(100);

  const result = useMemoPolyfill(() => {
    console.log("enpensive cal", cnt);
    return cnt * cnt;
  }, [cnt]);
  return (
    <div>
      UseMemoProto
      <h1>{result}</h1>
      <h1>{cnt}</h1>
      <button onClick={() => setCnt((prev) => prev + 1)}>Click</button>
    </div>
  );
};

export default UseMemoProto;
