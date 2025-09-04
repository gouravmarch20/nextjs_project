import React from "react";
import { useCalendarStore } from "./CalendarStore";
import { ViewProps } from "./calenderType";
const WeekView: React.FC<ViewProps> = ({ onEventClick }) => {
  const { events } = useCalendarStore();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((day, idx) => (
        <div key={idx} className="border p-2">
          <strong>{day}</strong>
          {events
            .filter((e) => new Date(e.start).getDay() === idx)
            .map((e) => (
              <div
                key={e.id}
                onClick={() => onEventClick(e)}
                className="bg-blue-200 m-1 p-1 rounded cursor-pointer"
              >
                {e.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
export default WeekView;
