"use client";
import React from "react";
type TimeListProps = {
  t: number;
};
const TimeList: React.FC<TimeListProps> = ({ t }) => {
  return (
    <div className=" ">
      <div className="h-[120px] relative border-b-1 border-orange-300   ">
        <div className="border-r-2 border-indigo-400 h-full absolute left-6 "></div>
        <div>{t}</div>
      </div>
    </div>
  );
};
export default TimeList;
