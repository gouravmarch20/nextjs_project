"use client";

// import React, { useState, useEffect, useRef } from "react";

// const MATRIX = 15;

// interface SnakeBlock {
//   [key: string]: string;
// }
// const oppositeDirection = {
//   UP: "DOWN",
//   DOWN: "UP",
//   LEFT: "RIGHT",
//   RIGHT: "LEFT",
// };

// const SnakePage = () => {
//   const boards = Array.from({ length: MATRIX }, () => new Array(MATRIX).fill(""));

//   const [snakeAreaCordinate, setSnakeAreaCordinate] = useState<SnakeBlock[]>([
//     { "1": "1" },
//     { "1": "2" },
//     { "1": "3" },
//     { "1": "4" },

//   ]);

//   const [ballCordinate, setBallCordinate] = useState<string[]>(["0", "1"]);
//   const [score, setScore] = useState(0);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const userArrowDirection = useRef<string>("RIGHT");

//   // Check if the given cell is part of the snake
//   const isSnakeCordinate = (i: string, j: string) => {
//     return snakeAreaCordinate.some((block) => {
//       const [x, y] = Object.entries(block)[0];
//       return x === i && y === j;
//     });
//   };

//   const isBallCordinate = (i: string, j: string) => {
//     return ballCordinate[0] === i && ballCordinate[1] === j;
//   };

//   const isInRange = (row: number, col: number) => {
//     return row >= 0 && row < MATRIX && col >= 0 && col < MATRIX;
//   };

//   // Main game loop
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSnakeAreaCordinate((prev) => {
//         const temp = [...prev];
//         const head = temp[temp.length - 1];
//         if (!head) return prev;

//         let currentX = Number(Object.keys(head)[0]);
//         let currentY: number | string = Number(Object.values(head)[0]);

//         // Update position based on direction
//         if (userArrowDirection.current === "UP") {
//           currentX -= 1;
//         } else if (userArrowDirection.current === "DOWN") {
//           currentX += 1;
//         } else if (userArrowDirection.current === "LEFT") {
//           currentY -= 1;
//         } else {
//           currentY += 1;
//         }

//         if (!isInRange(currentX, Number(currentY))) {
//           setIsGameOver(true);
//           return prev;
//         }

//         const newHead = { [currentX]: String(currentY) };
//         temp.push(newHead);
//         temp.shift(); // remove tail unless we ate the ball

//         return temp;
//       });
//     }, 1500);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Handle eating the ball
//   useEffect(() => {
//     const head = snakeAreaCordinate[snakeAreaCordinate.length - 1];
//     if (!head) return;

//     const [x, y] = [String(Object.keys(head)[0]), String(Object.values(head)[0])];
//     const [bx, by] = ballCordinate;

//     if (x === bx && y === by) {
//       setScore((prev) => prev + 10);
//       setBallCordinate([
//         String(Math.floor(Math.random() * MATRIX)),
//         String(Math.floor(Math.random() * MATRIX)),
//       ]);

//       // extend snake
//       setSnakeAreaCordinate((prev) => {
//         const temp = [...prev];
//         const last = temp[0];
//         return [last, ...temp]; // grow by 1
//       });
//     }
//   }, [snakeAreaCordinate]);

//   // Handle key press
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       switch (e.key) {
//         case "ArrowUp":
//           userArrowDirection.current = "UP";
//           break;
//         case "ArrowDown":
//           userArrowDirection.current = "DOWN";
//           break;
//         case "ArrowLeft":
//           userArrowDirection.current = "LEFT";
//           break;
//         case "ArrowRight":
//           userArrowDirection.current = "RIGHT";
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw]">
//       {isGameOver && <h1 className="text-3xl font-bold text-red-500">GAME OVER</h1>}
//       <h2 className="text-xl font-semibold mb-4">Score: {score}</h2>

//       <div className="border-2 border-black w-[900px]">
//         {boards.map((row, i) => (
//           <div
//             key={i}
//             style={{ display: "grid", gridTemplateColumns: `repeat(${MATRIX}, 1fr)` }}
//           >
//             {row.map((_, j) => (
//               <div
//                 key={j}
//                 className={`w-6 h-6 border border-gray-300 text-center ${
//                   isSnakeCordinate(String(i), String(j)) ? "bg-green-500" : ""
//                 } ${isBallCordinate(String(i), String(j)) ? "bg-red-500" : ""}`}
//               >
//                 {/* {i},{j} */}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SnakePage;