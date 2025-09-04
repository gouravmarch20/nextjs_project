"use client";
import React, { useEffect, useState } from "react";
const MATRIXSIZE = 3;

type CellValue = "" | "O" | "X";
type TicGrid = CellValue[][];

const TicToePage = () => {
  const [ticGrid, setTicGrid] = useState<TicGrid>([]);
  const [showWinner, setShowWinner] = useState(false);
  //   !m2 --> 0 vs O very bad debug
  const [userMove, setUserMove] = useState<CellValue>("O");
  useEffect(() => {
    const res: TicGrid = [];
    for (let i = 0; i < MATRIXSIZE; i++) {
      //!m1
      const curr: CellValue[] = [];
      for (let j = 0; j < MATRIXSIZE; j++) {
        curr.push("");
      }
      res.push(curr);
    }
    setTicGrid(res);
  }, []);
  const checkWinner = (ticGridT: TicGrid, move: CellValue) => {
    // for all row
    for (let i = 0; i < ticGridT.length; i++) {
      let isWinnerFound = true;
      for (let j = 0; j < ticGridT.length; j++) {
        if (ticGridT[i][j] != move) {
          isWinnerFound = false;
        }
      }
      if (isWinnerFound) {
        return true;
      }
    }
    // // all column
    for (let i = 0; i < ticGridT.length; i++) {
      let isWinnerFound = true;
      for (let j = 0; j < ticGridT.length; j++) {
        if (ticGridT[j][i] != move) {
          isWinnerFound = false;
        }
      }
      if (isWinnerFound) {
        return true;
      }
    }

    // // digonal 1
    let isD1Winner = true;
    for (let i = 0; i < ticGridT.length; i++) {
      if (ticGridT[i][i] != move) {
        isD1Winner = false;
      }
    }
    if (isD1Winner) return true;
    // diagonal 2
    // !m3 :: marke false
    let isD2Winner = true;
    for (let i = 0; i < ticGridT.length; i++) {
      console.log(
        "debug_8",
        i,
        ticGridT.length - i - 1,
        ticGridT[i],
        ticGridT[ticGridT.length - i - 1][i],
        move
      );
      if (ticGridT[ticGridT.length - i - 1][i] != move) {
        console.log(
          "debug_9",
          move,
          ticGridT.length - i - 1,
          i,
          ticGridT[ticGridT.length - i - 1][i]
        );
        isD2Winner = false;
      }
    }
    if (isD2Winner) return true;
    return false;
  };
  const markMove = (i: number, j: number, userMove: CellValue) => {
    const tempG = [...ticGrid];
    tempG[i][j] = userMove;
    if (checkWinner(tempG, userMove)) {
      setShowWinner(true);
    } else {
      setUserMove((prev) => (prev === "O" ? "X" : "O"));
    }
    setTicGrid(tempG);
  };

  const isAlreadySelected = (i: number, j: number) => {
    return ticGrid[i][j] != "";
  };

  return (
    <div>
      {showWinner && <h2>winner is {userMove}</h2>}
      {ticGrid?.map((tG, idx) => {
        return (
          <div className="flex  gap-2" key={idx}>
            {tG.map((t, idx1) => (
              <div
                key={idx1}
                className={`w-30 h-30 bg-amber-200 m-2 ${
                  isAlreadySelected(idx, idx1)
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (!isAlreadySelected(idx, idx1)) {
                    markMove(idx, idx1, userMove);
                  }
                }}
              >
                {t}
              </div>
            ))}
          </div>
        );
      })}
      <h3>Player {userMove} turn</h3>
      <h2
        onClick={() => {
          setTicGrid([]);
        }}
      >
        Resey game
      </h2>
    </div>
  );
};

export default TicToePage;
