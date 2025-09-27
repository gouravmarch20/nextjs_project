import React, { useState, useMemo, useCallback } from "react";

const callbackMemo = () => {
  const [cnt, setCnt] = useState(0);
  const [cnt1, setCnt1] = useState(100);

  const squaredVO = useMemo(() => {
    console.log("enpensive cal", cnt , cnt1);
    return cnt * cnt;
  }, [cnt]);
  //   function will not change ==> cnt1 ::: alway inital till depency array is not chage run memorize function 
  const squaredV = useCallback(() => {
    console.log("enpensive cal", cnt , cnt1);
    return cnt * cnt;
  }, [cnt]);
  return (
    <div>
      callbackMemo
      <h2>{squaredVO}</h2>
      <h3>{squaredV()}</h3>
      <button
        className="border bg-amber-300"
        onClick={() => setCnt((prev) => prev + 1)}
      >
        {" "}
        Click{" "}
      </button>
      <h3>{cnt1}</h3>
      <button
        className="border bg-blue-300"
        onClick={() => setCnt1((prev) => prev + 1)}
      >
        {" "}
        Click{" "}
      </button>
    </div>
  );
};

export default callbackMemo;
