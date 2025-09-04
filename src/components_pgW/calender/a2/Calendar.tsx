import React, { useState } from "react";
import { ViewType, CalenderEvent } from "./calenderType";
import Header from "./Header";
import DayView from "./DayView";
import WeekView from "./WeekView";
import MonthlyView from "./MonthlyView";
import EventModal from "./AddEditEvent";
import { useCalendarStore } from "./CalendarStore";
const Calendar: React.FC = () => {
  const [view, setView] = useState<ViewType>("day");
  const [isModalOpen, setModalOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState<CalenderEvent | null>(null);
  const { events, addEvent, updateEvent, deleteEvent } = useCalendarStore();

  const handleAddClick = () => {
    setEventToEdit(null);
    setModalOpen(true);
  };

  const handleEditClick = (event: CalenderEvent) => {
    setEventToEdit(event);
    setModalOpen(true);
  };
  const handleSave = (event: CalenderEvent) => {
    if (events.some((e) => e.id === event.id)) {
      updateEvent(event.id, event);
    } else {
      addEvent(event);
    }
  };

  return (
    <>
      <Header view={view} setView={setView} onAddClick={handleAddClick} />
      {view === "day" && <DayView onEventClick={handleEditClick} />}
      {view === "week" && <WeekView onEventClick={handleEditClick} />}
      {view === "month" && <MonthlyView onEventClick={handleEditClick} />}{" "}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        eventToEdit={eventToEdit}
        onDelete={(id) => deleteEvent(id)}
      />
    </>
  );
};
export default Calendar;
