"use client";
import { useState } from "react";
import ToastContainer from "./ToastContainer_flex";
import ToastContainerT from "./ToastContainer_transition";

function App() {
  const data = [
    {
      id: 1,
      position: "center_center",
      timerId: "",
      type: "blue",
    },
    {
      id: 2,
      position: "center_center",
      timerId: "",
      type: "green",
    },
    {
      id: 3,
      position: "top_left",
      timerId: "",
      type: "red",
    },
    {
      id: 4,
      position: "top_left",
      timerId: "",
      type: "red",
    },
  ];
  const [toastData, setToastData] = useState(data);
  const handleDeleteToast = (id) => {
    console.log(
      "debugt",
      id,
      toastData.filter((t) => t.id !== id)
    );
    setToastData((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAdd = (time, color, positionS) => {
    const id = Date.now(); // ✅ fixed

    const timerId = setTimeout(() => {
      handleDeleteToast(id);
    }, time);
    // m2 ::
    const newO = {
      id,
      position: positionS,
      timerId,
      type: color,
    };

    console.log("dd", newO);
    setToastData((prev) => [...prev, newO]);
  };

  return (
    <div className="">
      {/* <ToastContainer
        toasts={toastData}
        handleDeleteToast={handleDeleteToast}
      /> */}

      <ToastContainerT
        toasts={toastData}
        handleDeleteToast={handleDeleteToast}
      />
      <button
        onClick={() => handleAdd(3000, "blue", "center_center")}
        className="mt-[500px] relative z-50 bg-red-300 "
      >
        Add Toast
      </button>
      <button
        onClick={() => handleAdd(5000, "green", "bottom_left")}
        className="mt-[500px] relative z-50 bg-red-300 ms-1"
      >
        the_t
      </button>
      <button
        onClick={() => handleAdd(5000, "red", "top_right")}
        className="mt-[500px] relative z-50 bg-red-300 ms-1"
      >
        the_t
      </button>
    </div>
  );
}

export default App;
