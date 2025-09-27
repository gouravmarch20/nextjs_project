import React, { useRef, useState } from "react";

const useEffectPolyfill = (cb: Function, args: any) => {
  const inital = useRef(true);
  const prevArgs = useRef(args);
  const cleanupRef = useRef<null | (() => void)>(null);

  //   console.log("args__", args, prevArgs.current);
  //   const [cn, setcn] = useState(args);
  if (inital.current) {
    cleanupRef.current = cb() || null;

    console.log("debugini", prevArgs.current);

    inital.current = false;
    prevArgs.current = args;
  } else if (JSON.stringify(prevArgs.current) != JSON.stringify(args)) {
    if (cleanupRef.current) {
      cleanupRef.current();
    }

    cb();
    prevArgs.current = args;
    console.log("debug", prevArgs.current);
  }

  if (!args) {
    cb();
  }
  //   console.log("prevArgs", prevArgs.current, cn);
  return;
};

export default useEffectPolyfill;
