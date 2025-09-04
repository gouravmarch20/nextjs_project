import React from "react";
import { ViewType } from "./calenderType";
type HeaderProps = {
  view: ViewType;
  setView: (s: ViewType) => void;
  onAddClick : () => void
};

const Header: React.FC<HeaderProps> = ({ view, setView , onAddClick}) => {
  return (
    <>
      <h1>{view}</h1>
      <button onClick={() => setView("day")}>Day</button>
      <button onClick={() => setView("week")}>Week</button>
      <button onClick={() => setView("month")}>Month</button>
      <button onClick={onAddClick} className="bg-blue-500 text-white px-2 py-1 rounded">+ Add Event</button>

    </>
  );
};
export default Header;
