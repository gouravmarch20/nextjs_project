import React, { useState, useRef } from "react";
type productDataType = {
  availabilityStatus: string;
  images: string[];
  id: number;
  description: string;
  title: string;
};
type cacheObj = {
  [key: string]: productDataType[];
};

const useCache = (maxSize = 100) => {
  const cacheRef = useRef<cacheObj>({});

  const hasCache = (key: string): productDataType[] | null => {
    return cacheRef.current[key] ?? null;
  };

  const putInCache = (keyN: string, result: productDataType[]) => {
    const keys = Object.keys(cacheRef.current);
    if (keys.length >= maxSize) {
      const oldestKey = keys[0];
      delete cacheRef.current[oldestKey];
    }
    cacheRef.current[keyN] = result;
  };

  return {
    hasCache,
    putInCache,
  };
};
export default useCache;
