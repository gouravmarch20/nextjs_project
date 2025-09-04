import React, { useCallback, useState } from "react";
import { questionData } from "../data/questionDataDoubleRef";
import QuestionItem from "./QuestionItem";
import QuestionFooter from "./QuestionFooter";
import Timer from "./Timer";
import "../styles/quizOneByOne.css";

const QuizApp = () => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  console.log("deb", selectedAnswer?.length, questionData?.length - 1);

  const currentQuestion = questionData[currentIndex];

  const handleSelectAnswer = (questionId, isCorrect, selectedValue) => {
    if (selectedAnswer.length + 1 === questionData.length) {
      setGameEnd(true);
    }
    setSelectedAnswer((prev) => [
      ...prev,
      { questionId, isCorrect, selectedValue },
    ]);
    if (isCorrect) {
      setScore((prev) => prev + 10);
    }
  };
  const handlePrevNext = (index) => {
    setCurrentIndex(index);
  };
  const isSelectionAllow = (questionId) => hasUserAlreadyAnswered(questionId);
  const hasUserAlreadyAnswered = (questionId) => {
    if (selectedAnswer?.find((ans) => ans.questionId == questionId)) {
      return false;
    }
    return true;
  };
  const timeOutPreFill = (questionId) => {
    if (hasUserAlreadyAnswered(questionId)) {
      return;
    }
    setSelectedAnswer((prevAns) => [
      ...prevAns,
      { questionId, isCorrect: false, selectedValue: "" },
    ]);
  };
  const getBg = useCallback(
    (questionId, option) => {
      const isUserSelected = selectedAnswer?.find(
        (ans) => ans?.questionId === questionId
      );

      if (isUserSelected) {
        if (isUserSelected?.isCorrect && isUserSelected.selectedValue == option)
          return "green";
        if (
          !isUserSelected?.isCorrect &&
          isUserSelected.selectedValue == option
        )
          return "red";

        return "blue";
      } else {
        return "blue";
      }
    },
    [selectedAnswer]
  );

  return (
    <div className="quiz-app-one">
      <h1>Quiz Pokemon </h1>
      <p>
        Question {currentIndex + 1} of {questionData.length}
      </p>

      {gameEnd ? (
        <>
          <h3> Total Score {score} </h3>
        </>
      ) : (
        <>
          <h3> Total Score {score} </h3>

          {hasUserAlreadyAnswered(currentQuestion.questionId) && (
            <Timer
              timer={10}
              handlePrevNext={handlePrevNext}
              currentQuestion={currentQuestion}
              timeOutPreFill={timeOutPreFill}
            />
          )}

          <QuestionItem
            currentQuestion={currentQuestion}
            getBg={getBg}
            handleSelectAnswer={handleSelectAnswer}
            isSelectionAllow={isSelectionAllow}
          />
          <QuestionFooter
            currentQuestion={currentQuestion}
            isLast={currentIndex === questionData?.length}
            handlePrevNext={handlePrevNext}
          />
        </>
      )}
    </div>
  );
};
export default QuizApp;
