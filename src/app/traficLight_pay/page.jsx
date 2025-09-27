import React, { useState, useEffect, useRef } from "react";
import { traficLight } from "./traficLight.js";

function App() {
  const [activeL, setActiveL] = useState(traficLight[0]);

  useEffect(() => {
    // m4 :: timeout --> better state change re run
    const id = setTimeout(() => {
      setActiveL((activeL) => {
        const nextIndex = activeL.next;
        return traficLight[nextIndex];
      });
    }, activeL.time);
    return () => clearInterval(id);
  }, [activeL]);

  const getColor = (colorType) => {
    if (colorType != activeL.key) {
      return "bg-gray-700";
    }
    if (colorType == "red") {
      return "bg-red-500";
    } else if (colorType == "green") {
      return "bg-green-500";
    } else if (colorType == "blue") {
      return "bg-blue-500";
    }
  };
  return (
    <main className="flex justify-center items-center ">
      <div className="bg-black p-2 mt-4 ">
        {traficLight?.map((light) => (
          <div
            className={`w-[80px] h-[80px] ${getColor(
              light.key
            )} rounded-[80px] my-2`}
            key={light.key}
          ></div>
        ))}
      </div>
    </main>
  );
}

export default App;
