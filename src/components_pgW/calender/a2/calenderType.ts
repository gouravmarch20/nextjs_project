export type CalenderEvent = {
  id: string;
  start: string;
  title: string;
  end: string;
};
export type ViewType = "day" | "week" | "month";
export type CalendarStoreType = {
  events: CalenderEvent[];
  addEvent: (event: CalenderEvent) => void;
  updateEvent: (id: string, updated: CalenderEvent) => void;
  deleteEvent: (id: string) => void;
};

export type ViewProps = {
  onEventClick: (event: CalenderEvent) => void;
};

