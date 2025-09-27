"use client";
import React from "react";
import ToggleableContent from "./ToggleContent_1.jsx";
const RenderProps = () => {
  return (
    <div>
      <ToggleableContent
        render={({ isOpen, toggle }) => {
          return (
            <div>
              <button onClick={toggle}>
                {isOpen ? "Hide" : "Show"} Content
              </button>
              {isOpen && <p>Subscribe to Roadside Coder!</p>}
            </div>
          );
        }}
      />
    </div>
  );
};

export default RenderProps;
