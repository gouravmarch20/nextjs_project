import React, { useState, useEffect } from "react";
import "./toast_transition.css";

const ToastContainer = ({ toasts, handleDeleteToast }) => {
  const [toastGrouped, setToastGrouped] = useState([]);

  const mapAlignment = {
    top_left: "top-left",
    top_center: "top-center",
    top_right: "top-right",
    center_left: "center-left",
    center_center: "center-center",
    center_right: "center-right",
    bottom_left: "bottom-left",
    bottom_center: "bottom-center",
    bottom_right: "bottom-right",
  };

  const toastBgColor = {
    red: "bg-red-800",
    blue: "bg-blue-600",
    green: "bg-green-600",
  };
  useEffect(() => {
    let groupedToast = {};

    for (const value of toasts) {
      if (groupedToast[value.position]) {
        groupedToast[value.position].push(value);
      } else {
        groupedToast[value.position] = [value];
      }
    }
    console.log("hit", groupedToast);
    setToastGrouped(Object.entries(groupedToast));
  }, [toasts]);

  console.log("toastGrouped", toastGrouped);
  return (
    <div className="   ">
      {toastGrouped?.length > 0 &&
        toastGrouped?.map((toastG) => {
          const [toastParent, toastChild] = toastG;
          console.log("suprev_98", toastParent);
          return (
            <div
              key={toastParent}
              // className={` flex  flex-col bg-red-900 mb-4  ${mapAlignment[toastParent]}  bg-red-200`}
              className={`fixed flex flex-col ${mapAlignment[toastParent]}  test_1  `}
            >
              {toastChild?.map((t) => (
                <div
                  key={t.id}
                  className={`  w-[60px] h-[45px] ${toastBgColor[t.type]}`}
                >
                  <h2>dd = {mapAlignment[toastParent.position]}</h2>
                  <button
                    className="ml-2 text-sm underline"
                    onClick={() => handleDeleteToast(t.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          );
        })}

      {}
    </div>
  );
};
export default ToastContainer;
