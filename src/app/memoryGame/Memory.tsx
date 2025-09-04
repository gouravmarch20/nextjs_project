"use client";
import React, { useState, useEffect, useRef } from "react";
const MATRIXSIZE = 4;

const Memory = () => {
  const makeV = () => {
    const res = [];
    for (let i = 0; i < MATRIXSIZE; i++) {
      let curr = [];
      for (let j = 0; j < MATRIXSIZE; j++) {
        curr[j] = "";
      }
      res.push(curr);
    }
    return res;
  };

  const [memoryGrid, setMemoryGrid] = useState<string[][]>(makeV());
  const [orderTrack, setOrderTrack] = useState<number[][]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  console.log("memoryGrid", memoryGrid);
  const handleGridMark = (i: number, j: number) => {
    const tempMemory = memoryGrid.map((m) => [...m]);
    tempMemory[i][j] = "CLICKED";
    console.log("markied", i, j, tempMemory);
    setMemoryGrid(tempMemory);
    const tempOrderTrack = [...orderTrack];
    tempOrderTrack.push([i, j]);
    setOrderTrack(tempOrderTrack);
  };
  const getBgColor = (i: number, j: number) => {
    if (memoryGrid[i][j] == "CLICKED") {
      return "bg-red-500";
    }
    return "bg-green-500";
  };
  const [isRemoveAllowed, setIsRemoveAllowed] = useState(false);
  useEffect(() => {
    if (!isRemoveAllowed) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setOrderTrack((prevOrder) => {
        if (prevOrder?.length == 0 && intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        const tempO = [...prevOrder];
        const removeItem = tempO.pop();
        if (!removeItem) return tempO;

        setMemoryGrid((prevM) => {
          const [i, j] = removeItem;
          const tempMemoG = prevM.map((row) => [...row]);
          tempMemoG[i][j] = "";
          return tempMemoG;
        });

        return tempO;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRemoveAllowed]);

  // console.log("memoryGrid", memoryGrid);
  console.log("orderTrack", orderTrack);
  return (
    <div className="flex h-full w-full justify-center ">
      <div className="grid gap-4">
        {memoryGrid.map((memoG, i) => (
          <div key={i} className="flex gap-2">
            {memoG?.map((mg, j) => (
              <div
                key={j}
                className={`h-[50px] w-[50px]  ${getBgColor(
                  i,
                  j
                )}  cursor-pointer`}
                onClick={() => handleGridMark(i, j)}
              >
                <h1 className="text-red-500 text-center">
                  dfs
                  {/* {memoryGrid[i][j]} */}
                </h1>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={() => setIsRemoveAllowed((prev) => !prev)}>
        {isRemoveAllowed ? "Stop" : "Reverse"}
      </button>
    </div>
  );
};

export default Memory;
