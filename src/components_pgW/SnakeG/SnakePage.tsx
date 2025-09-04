"use client";
import React, { useState, useEffect, useRef } from "react";

const SnakePage = () => {
  const MATRIX = 15;
  const boards = Array.from({ length: MATRIX }, () =>
    new Array(MATRIX).fill("")
  );

  interface snakeT {
    [key: string]: string;
  }

  const [snakeAreaCordinate, setSnakeAreaCordinate] = useState<snakeT[]>([
    { "1": "1" },
    { "1": "2" },
  ]);

  const [ballCordinate, setBallCordinate] = useState<string[]>(["0", "1"]);
  const ballRef = useRef(ballCordinate);
  const shouldGrowRef = useRef(false);
  const [score, setScore] = useState(0);
  const userArrowDirection = useRef<string>("RIGHT");
  const [isGameOver, setIsGameOver] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const isSnakeCordinate = (i: string, j: string) => {
    return snakeAreaCordinate.some((coord) => {
      const [[row, col]] = Object.entries(coord);
      return row === i && col === j;
    });
  };

  const isBallCordinate = (i: string, j: string) => {
    const [key, value] = ballCordinate;
    return key === i && value === j;
  };

  const isInRange = (row: number, col: number) =>
    row >= 0 && row < MATRIX && col >= 0 && col < MATRIX;

  useEffect(() => {
    ballRef.current = ballCordinate;
  }, [ballCordinate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          userArrowDirection.current = "UP";
          break;
        case "ArrowDown":
          userArrowDirection.current = "DOWN";
          break;
        case "ArrowLeft":
          userArrowDirection.current = "LEFT";
          break;
        case "ArrowRight":
          userArrowDirection.current = "RIGHT";
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setSnakeAreaCordinate((prev) => {
        const tempSC = [...prev];
        const head = tempSC[tempSC.length - 1];

        if (head) {
          let row = Number(Object.keys(head)[0]);
          let col = Number(Object.values(head)[0]);

          // move head first
          switch (userArrowDirection.current) {
            case "UP":
              row--;
              break;
            case "DOWN":
              row++;
              break;
            case "LEFT":
              col--;
              break;
            case "RIGHT":
            default:
              col++;
              break;
          }

          if (!isInRange(row, col)) {
            setIsGameOver(true);
            return prev;
          }

          const newHead = { [row]: String(col) };
          tempSC.push(newHead);

          // after moving, check collision with ball
          if (
            String(row) === ballRef.current[0] &&
            String(col) === ballRef.current[1]
          ) {
            shouldGrowRef.current = true;
            setScore((prev) => prev + 10);

            let newX = "",
              newY = "",
              attempts = 0;
            do {
              newX = String(Math.floor(Math.random() * MATRIX));
              newY = String(Math.floor(Math.random() * MATRIX));
              attempts++;
              if (attempts > 100) break;
            } while (isSnakeCordinate(newX, newY));

            setBallCordinate([newX, newY]);
          }

          if (!shouldGrowRef.current) {
            tempSC.shift(); // remove tail
          } else {
            shouldGrowRef.current = false; // reset growth
          }

          return tempSC;
        }

        return prev;
      });
    }, 300); // You can adjust speed here

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw]">
      {isGameOver && (
        <h1 className="text-red-600 text-2xl font-bold">GAME OVER</h1>
      )}
      <h2 className="mb-4 text-lg">Score: {score}</h2>
      <div
        className="border-2 border-amber-950 w-[900px] outline-none"
        tabIndex={0} // Make div focusable if needed
      >
        {boards.map((board, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(15, 1fr)",
            }}
          >
            {board.map((_, j) => {
              const isSnake = isSnakeCordinate(String(i), String(j));
              const isBall = isBallCordinate(String(i), String(j));
              return (
                <div
                  key={j}
                  className={`border border-b-black text-center w-full h-6 ${
                    isSnake ? "bg-green-500" : ""
                  } ${isBall ? "bg-red-400" : ""}`}
                >
                  {/* {i} {j} */}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnakePage;
