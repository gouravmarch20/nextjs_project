import React, { useState, useEffect } from "react";
import { CalenderEvent } from "./calenderType";

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: CalenderEvent) => void;
  eventToEdit?: CalenderEvent | null;
  onDelete: (id: string) => void;
};

const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  onSave,
  eventToEdit,
  onDelete,
}) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    if (eventToEdit) {
      setTitle(eventToEdit.title);
      setStart(eventToEdit.start);
      setEnd(eventToEdit.end);
    } else {
      setTitle("");
      setStart("");
      setEnd("");
    }
  }, [eventToEdit]);

  const handleSave = () => {
    if (!title || !start || !end) {
      alert("All fields required.");
      return;
    }
    if (new Date(start) >= new Date(end)) {
      alert("Start time must be before end time.");
      return;
    }
    const newEvent: CalenderEvent = {
      id: eventToEdit?.id ?? Date.now().toString(),
      title,
      start,
      end,
    };
    onSave(newEvent);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <div className="flex gap-2 mt-2">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
          {eventToEdit && (
            <button
              onClick={() => {
                onDelete(eventToEdit.id);
                onClose();
              }}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
