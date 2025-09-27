import React, { useState, useRef, useEffect } from "react";

const useMemoPolyfill = (cb: Function, deps: any) => {
  const depsRef = useRef([]);
  const valueRef = useRef(null); //no render so not state

  const depsChanged =
    !depsRef.current ||
    deps.length !== depsRef.current.length ||
    deps.some((d: any, i: any) => d !== depsRef.current?.[i]);

  if (depsChanged) {
    depsRef.current = deps;
    valueRef.current = cb();
  }
  useEffect(() => {
    return () => {
      valueRef.current = null;
    };
  }, []);

  return valueRef.current;
};

export default useMemoPolyfill;
