"use client";
import React, { useState, useEffect, useRef } from "react";
import { userT } from "./stopwatchType";

const MILLI_HOUR = 60 * 60 * 1000;
const MILLI_MIN = 60 * 1000;
const MILLI_SEC = 1000;

const StopwatchPage = () => {
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
    setIsPlaying(true);
  };
  const isInputEmpty =
    !userInputTimer.hr && !userInputTimer.min && !userInputTimer.sec;

  useEffect(() => {
    if (isPlaying) {
      timerId.current = setInterval(() => {
        setUserInputTimer((prev) => {
          let h = Number(prev.hr || 0);
          let m = Number(prev.min || 0);
          let s = Number(prev.sec || 0);

          if (h === 0 && m === 0 && s === 0) {
            clearTimerId();
            setIsPlaying(false);
            setTimeEndAlert(true);
            return prev; // No change
          }

          if (s > 0) {
            s -= 1;
          } else {
            if (m > 0) {
              m -= 1;
              s = 59;
            } else if (h > 0) {
              h -= 1;
              m = 59;
              s = 59;
            }
          }

          return {
            hr: h.toString(),
            min: m.toString(),
            sec: s.toString(),
          };
        });
      }, 1000);
    }

    return () => {
      clearTimerId();
    };
  }, [isPlaying]);

  return (
    <div>
      {timeEndAlert && (
        <div className="text-red-500 font-bold">⏰ Time's up!</div>
      )}

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
