"use client";
import React, { useState, useEffect, useRef } from "react";
import { userT } from "./stopwatchType";

const MILLI_HOUR = 60 * 60 * 1000;
const MILLI_MIN = 60 * 1000;
const MILLI_SEC = 1000;

const StopwatchPage = () => {
  const [timeRem, setTimeRem] = useState(0);
  const [timeEndAlert, setTimeEndAlert] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const handleReset = () => {
    setIsPlaying(false);
    clearTimerId();
    setUserInputTimer({
      hr: "",
      min: "",
      sec: "",
    });
    setTimeRem(0);
  };
  const clearTimerId = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  };
  const handlePause = () => {
    clearTimerId();
    setIsPlaying(false);
  };

  const [userInputTimer, setUserInputTimer] = useState<userT>({
    hr: "",
    min: "",
    sec: "",
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const val = e.target.value;
    if (isNaN(Number(val)) || Number(val) > 59) return;

    setUserInputTimer((prev) => ({ ...prev, [key]: e.target.value }));
  };
  const onPlay = () => {
    if (timeRem) {
      setIsPlaying(true);
    } else {
      calcTime();
    }
  };
  const isInputEmpty =
    !userInputTimer.hr && !userInputTimer.min && !userInputTimer.sec;

  const calcTime = () => {
    const milliH = (Number(userInputTimer.hr) || 0) * 60 * 60 * 1000;
    const milliM = (Number(userInputTimer.min) || 0) * 60 * 1000;
    const milliS = (Number(userInputTimer.sec) || 0) * 1000;

    const timeSum = milliH + milliM + milliS;
    setTimeRem(timeSum);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      timerId.current = setInterval(() => {
        setTimeRem((prev) => {
          if (prev == 0) {
            setIsPlaying(false);
            clearTimerId();
            setTimeEndAlert(true);

            return 0;
          }
          return prev - 1000;
        });
      }, 1000);
    }

    return () => {
      clearTimerId();
    };
  }, [isPlaying]);
  const formatTime = () => {
    //
    let totalTimeInMilliS = timeRem;
    const noOfHour = Math.floor(totalTimeInMilliS / MILLI_HOUR);
    totalTimeInMilliS = totalTimeInMilliS - noOfHour * MILLI_HOUR;
    //
    const noOfMin = Math.floor(totalTimeInMilliS / MILLI_MIN);
    totalTimeInMilliS = totalTimeInMilliS - noOfMin * MILLI_MIN;
    //reming sec
    const noOfSec = Math.floor(totalTimeInMilliS / MILLI_SEC);

    console.log("debug", noOfHour, noOfMin, totalTimeInMilliS);

    // return `${noOfHour} : ${noOfMin} :  ${noOfSec}`;
    return `${String(noOfHour).padStart(2, "0")} : ${String(noOfMin).padStart(
      2,
      "0"
    )} : ${String(noOfSec).padStart(2, "0")}`;
  };
  return (
    <div>
      {timeEndAlert && (
        <div className="text-red-500 font-bold">⏰ Time's up!</div>
      )}
      {isPlaying ? (
        <h2>{formatTime()}</h2>
      ) : (
        <div className="flex gap-4">
          <input
            placeholder="HH"
            type="text"
            value={userInputTimer.hr}
            onChange={(e) => {
              handleChange(e, "hr");
            }}
            className="border-2"
          />
          <input
            placeholder="MM"
            type="text"
            value={userInputTimer.min}
            onChange={(e) => {
              handleChange(e, "min");
            }}
            className="border-2"
          />
          <input
            type="text"
            placeholder="SS"
            value={userInputTimer.sec}
            onChange={(e) => {
              handleChange(e, "sec");
            }}
            className="border-2"
          />
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={() => {
            handlePause();
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            handleReset();
          }}
        >
          Restart
        </button>
        <button
          onClick={() => {
            onPlay();
          }}
          disabled={isInputEmpty}
          className={`${isInputEmpty ? "cursor-not-allowed " : ""}`}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default StopwatchPage;
