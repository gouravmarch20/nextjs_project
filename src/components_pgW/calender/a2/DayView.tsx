import React from "react";
import { useCalendarStore } from "./CalendarStore";
import { ViewProps } from "./calenderType";
const DayView: React.FC<ViewProps> = ({ onEventClick }) => {
  const events = useCalendarStore((s) => s.events);

  return (
    <div className="relative h-[2880px] border-l border-gray-300">
      {/* 24 Hour Lines */}
      {Array.from({ length: 24 }, (_, i) => (
        <div
          key={i}
          className="absolute w-full border-t border-gray-300 text-xs text-gray-500 pl-2"
          style={{ top: i * 120 }}
        >
          {`${i.toString().padStart(2, "0")}:00`}
        </div>
      ))}

      {/* Render Events */}
      {events.map((event, idx) => {
        const start = new Date(event.start);
        const end = new Date(event.end);
        const top = start.getHours() * 120 + start.getMinutes() * 2;
        const bottom = end.getHours() * 120 + end.getMinutes() * 2;
        const height = bottom - top;

        return (
          <div
            key={idx}
            onClick={() => onEventClick(event)}
            className="absolute left-[50px] w-[90%] bg-blue-300 rounded shadow-md p-1 text-sm text-white"
            style={{ top, height }}
          >
            {event.title}
          </div>
        );
      })}
    </div>
  );
};

export default DayView;
