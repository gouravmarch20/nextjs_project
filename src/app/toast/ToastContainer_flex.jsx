import React, { useState, useEffect } from "react";

const ToastContainer = ({ toasts, handleDeleteToast }) => {
  const [toastGrouped, setToastGrouped] = useState([]);
  const mapAlignment = {
    top_left: "items-start justify-start",
    top_center: "items-start justify-center",
    top_right: "items-end justify-center",
    center_left: "items-center justify-start",
    center_center: "items-center justify-center",
    center_right: "items-center justify-end",
    bottom_left: "items-end justify-start",
    bottom_center: "items-end justify-center",
    bottom_end: "items-end justify-end",
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
              className={`fixed flex flex-col ${mapAlignment[toastParent]}  top-0 bottom-0 left-0 right-0 `}
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
