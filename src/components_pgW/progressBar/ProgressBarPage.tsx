"use client";

import Progress from "./Progress";
import React, { useEffect, useState } from "react";
import { INTERVAL_INCREMENT, INTERVAL_SPEED_IN_MS , MAX_INCREMENT_LIMIT} from "./progressContant";
const ProgressBarPage: React.FC = () => {
  const [progressPercent, setProgressPercent] = useState<number>(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setProgressPercent((prevP) => {
        console.log("prevP", prevP);
        if (prevP >= MAX_INCREMENT_LIMIT) {
          clearInterval(timerId);
          return 100; // cap at 100%
        }
        return prevP + INTERVAL_INCREMENT; // Increase by 20% every sec (total 5 sec to reach 100%)
      });
    }, INTERVAL_SPEED_IN_MS);
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <h1>the progress bar </h1>
      <Progress progressPercent={progressPercent} />
    </>
  );
};
export default ProgressBarPage;
