import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  let timerId = useRef(null);

  const handlePlay = () => {
    // !
    if (timerId.current) return; // prevent duplicate intervals

    timerId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 100);

    setIsPlaying(true);
  };
  const handlePause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setIsPlaying(false);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
    timerId.current = null;

    setTime(0);
    setIsPlaying(false);
  };
  const showTime = (time) => {
    const hour = Math.floor(time / (60 * 60 * 10));
    time = time % (60 * 60);
    const min = Math.floor(time / (60 * 10));
    time = time % 60;
    const sec = Math.floor(time / 10);

    time = time % 10;

    return `${hour} : ${min} : ${sec} :  ${time}`;
  };

  const getBgColor = () => {
    if (isPlaying == false && time) {
      return "bg-yellow-600";
    }
    return "bg-blue-600";
  };
  return (
    <>
      <div className="relative border w-[100px] h-[100px] rounded-[50px] flex justify-center items-center ">
        {showTime(time)}
      </div>

      <div className={`flex gap-2 ${getBgColor()}`}>
        {timerId.current && <button onClick={handlePause}> Pause </button>}
        {!!time && <button onClick={handleStop}> Stop </button>}

        <button onClick={handlePlay}> Play </button>
      </div>
    </>
  );
}

export default Stopwatch;
