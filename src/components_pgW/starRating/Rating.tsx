import React, { useState } from "react";

type RatingProps = {
  noOfStar: number;
};

const Rating: React.FC<RatingProps> = ({ noOfStar }) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(-1);
  const [selectedStar, setSelectedStar] = useState<number | null>(-1);
  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Enter" || e.key == " ") {
      setSelectedStar(index);
    }
  };
  console.log("debug", { hoveredStar, selectedStar });
  return (
    <>
      {Array.from({ length: noOfStar }).map((_, index) => {
        const isActive =
          hoveredStar !== null
            ? index <= hoveredStar
            : index <= (selectedStar ?? -1);

        return (
          <span
            key={index}
            role="radio"
            className={`${
              isActive ? "text-blue-700" : ""
            } cursor-pointer text-2xl transition-all`}
            onClick={() => {
              setSelectedStar(index);
            }}
            onMouseEnter={() => {
              setHoveredStar(index);
            }}
            onMouseLeave={() => {
              setHoveredStar(null);
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {" "}
       
            Dk
          </span>
        );
      })}
    </>
  );
};

export default Rating;
