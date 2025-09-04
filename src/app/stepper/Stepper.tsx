"use client";

import React, { useState } from "react";
import StepItem from "./StepItem";
import { steps } from "./stepperConstant";
const Stepper = () => {
  const [activeStep, setActiveStep] = useState<number>(2);
  return (
    <div>
      {steps?.map((step, ind) => {
        const isLast = steps.length - 1 == ind;
        const isCompleted = ind < activeStep;
        const isActive = ind == activeStep
        return (
          <StepItem
            key={ind}
            step={step}
            isLast={isLast}
            isActive={isActive}
            isCompleted={isCompleted}
          />
        );
      })}

      <div className="flex items-center justify-center gap-2">
        <h2>the steps </h2>
        <button
          onClick={() => setActiveStep((prev) => prev - 1)}
          className="border p-2 "
          disabled={activeStep === 0}
        >
          Pre{" "}
        </button>

        <button
          onClick={() => setActiveStep((prev) => prev + 1)}
          className="border p-2"
          disabled={activeStep === steps.length - 1}
        >
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
