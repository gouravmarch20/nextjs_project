import React from "react";
type ProgressType = {
  progressPercent: number;
};
const Progress: React.FC<ProgressType> = ({ progressPercent }) => {
  return (
    <>
      <div className="bg-amber-700 relative border-2 w-[600px] h-6">
        {" "}
        <div
          className="absolute w-full h-full "
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPercent}
          aria-label="File progress"
          style={{
            width: `${progressPercent}%`,
            // width: "80%",
            background: "green",
          }}
        >
          <span className="sr-only">Loading {progressPercent} percent</span>
          {progressPercent} %
        </div>
      </div>
    </>
  );
};
export default Progress;
