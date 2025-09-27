"use client";
import React, { useState } from "react";
import useEffectPolyfill from "../hooks/useEffectPolyfill";
// import useMemoVsCallback from "@/components_pgW/1_react_learning/hooks/useMemoVsCallback";

const Hooks = () => {
  const [cnt, setcnt] = useState(0);
  const [cnt2, setcnt2] = useState(0);

  const theEffect = () => {
    console.log("useEffect");
  };
  const x = useEffectPolyfill(theEffect, cnt);
  return (
    <div>
      Hooks
      <h1>{cnt}</h1>
      <button
        className="bg-orange-500 p-2 "
        onClick={() => setcnt((prev) => prev + 1)}
      >
        clic
      </button>
      <button
        className="bg-blue-500 p-2 "
        onClick={() => setcnt2((prev) => prev + 1)}
      >
        clic
      </button>
    </div>
  );
};

export default Hooks;
