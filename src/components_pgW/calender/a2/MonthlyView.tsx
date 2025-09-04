"use client";
import React from "react";
import { useCalendarStore } from "./CalendarStore";
import { ViewProps } from "./calenderType";

const MonthlyView: React.FC<ViewProps> = ({ onEventClick }) => {
  const { events } = useCalendarStore();
  const totalDays = 30;

  return (
    <div className="grid grid-cols-7 gap-1 ">
      {Array.from({ length: totalDays }, (_, idx) => (
        <div key={idx} className="border p-2">
          <strong>{idx + 1}</strong>
          {events
            ?.filter((e) => new Date(e.start).getDate() === idx + 1)
            ?.map((e) => (
              <div
                key={e.id}
                onClick={() => onEventClick(e)}

                className="bg-green-200 m-1 p-1 rounded cursor-pointer"
              >
                {e.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
export default MonthlyView;
