import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const FixedBoxPortal = () => {
  const el = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(el);
    return () => document.body.removeChild(el);
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed top-4 right-4 z-50 bg-red-800 text-white p-4 rounded shadow-lg">
      I'm rendered in a Portal (Fixed Box)
    </div>,
    el
  );
};

export default FixedBoxPortal;