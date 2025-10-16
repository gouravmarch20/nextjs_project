"use client";
import React, { useState } from "react";
import { status, taskData } from "./dragData";
const Drag = () => {
  const [boardData, setBoardData] = useState(taskData);
  const getGivenStatus = (status) => {
    const d = boardData.filter((ticket) => ticket.status === status);
    return d || [];
  };

  return (
    <div className="flex ">
      {status?.map((sta, ind) => (
        <div key={ind}>
          <h2 className="bg-red-300 ">{sta}</h2>
          {getGivenStatus(sta)?.map((ticket) => {
            return (
              <div key={ticket.id} className="">
                <h2>{ticket.title}</h2>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Drag;
