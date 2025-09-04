import React, { useRef, useState, useEffect } from "react";

const Timer = ({ timer, handlePrevNext, currentQuestion, timeOutPreFill }) => {
  const [time, setTime] = useState(timer);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time <= 0) {
        timeOutPreFill(currentQuestion.questionId);
        handlePrevNext(currentQuestion.next);
        setTime(10);
      }
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time, currentQuestion]);
  return (
    <>
      <h3>Time remaing {time} </h3>
    </>
  );
};
export default Timer;
