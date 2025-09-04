import React from "react";
// interface Types {
//     step : any,
//     isLast : boolean ,
//     isCompleted : boolean
// }
type StepItemProps = {
  step: any;
  isActive: boolean;
  isLast: boolean;
  isCompleted: boolean;
};

const StepItem: React.FC<StepItemProps> = ({ step, isActive ,isLast, isCompleted }) => {
  return (
    <>
      <div key={step.id} className="flex gap-2 mb-6 items-center relative">
        <div
          className={`w-[50px] h-[50px] transition-all duration-300 ${
            isActive ? "bg-green-700 border-4" : isCompleted ? "bg-blue-800" : "bg-amber-200"
          } rounded-full `}
        ></div>
        <p className="text-center">{step.name}</p>
        {!isLast && (
          <div
            className={`w-[2px]     h-[24px] absolute top-[100%] left-[25px] ${
              isCompleted ? "bg-indigo-800" : "bg-amber-600"
            } `}
          ></div>
        )}
      </div>
    </>
  );
};

export default StepItem;
