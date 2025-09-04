import React from "react";
import { eventTask } from "./eventConstant";
type t = {
  _id: number;
  startTime: string;
  endTime: string;
};
const Event: React.FC = () => {
  return (
    <div className=" ">
      {eventTask.map((e: t) => {
        

        const [startH, startM] = e.startTime.split(":").map(Number);
        const [endH, endM] = e.endTime.split(":").map(Number);

        const top = (startH * 120) + (startM * 2); // 2px per minute
        const bottom = (endH * 120) + (endM * 2);
        const height = bottom - top;

    
        // const height =

        return (
          <div
            className={`absolute bg-orange-300   left-14 w-[90%]   `}
            style={{
              top: `${top}px`,
              height: `${height}px`,
            }}
            key={e._id}
          >
            <h1>{e._id}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default Event;
