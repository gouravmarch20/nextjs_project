"use client";
import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
const AccordianPage = () => {
  const according = [
    {
      id: 1,
      title: "Hello",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      title: "Welcome",
      description: "Consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Update",
      description: "Sed do eiusmod tempor incididunt.",
    },
    {
      id: 4,
      title: "Reminder",
      description: "Ut enim ad minim veniam.",
    },
    {
      id: 5,
      title: "Final Note",
      description: "Quis nostrud exercitation ullamco.",
    },
  ];
  const [activeAccordian, setActiveAccordian] = useState(1);
  const handleActive = (id: number) => {
    setActiveAccordian((prev) => {
      if (prev == id) {
        return 0;
      }
      return id;
    });
  };
  return (
    <div className=" flex justify-center items-center min-h-screen  bg-amber-900">
      <div className="flex  gap-4 flex-col w-[50%] ">
        {according?.map((a) => (
          <div key={a.id} className="w-full">
            <div className="flex justify-between w-full">
              <div>{a.title}</div>
              <div onClick={() => handleActive(a.id)}>
                {activeAccordian === a.id ? "up" : "down"}
              </div>
            </div>
            {activeAccordian === a.id && (
              <AccordianItem description={a.description} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordianPage;
