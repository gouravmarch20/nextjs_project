import { create } from "zustand";
import { CalenderEvent, CalendarStoreType } from "./calenderType";
const dummyEvents: CalenderEvent[] = [
  {
    id: "1",
    title: "Morning Standup",
    start: "2025-06-22T09:00",
    end: "2025-06-22T09:30",
  },
  {
    id: "2",
    title: "Project Meeting",
    start: "2025-06-22T11:00",
    end: "2025-06-22T12:00",
  },
  {
    id: "3",
    title: "Lunch Break",
    start: "2025-06-22T13:00",
    end: "2025-06-22T14:00",
  },
  {
    id: "4",
    title: "Client Call",
    start: "2025-06-22T15:30",
    end: "2025-06-22T16:00",
  },
];

export const useCalendarStore = create<CalendarStoreType>((set) => ({
  events: dummyEvents || [],
  counter: 0,
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  updateEvent: (id, updated) =>
    set((state) => ({
      events: state.events.map((e) => (e.id === id ? { ...e, ...updated } : e)),
    })),
  deleteEvent: (id) =>
    set((state) => ({ events: state.events.filter((e) => e.id !== id) })),

  // 

}));
