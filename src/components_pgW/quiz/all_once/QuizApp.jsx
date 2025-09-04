import React, { useCallback, useMemo, useState } from "react";
import { questionData } from "../data/questionData";
import QuestionItem from "./QuestionItem";
import "../styles/quizOne.css";
const QuizApp = () => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const handleSelectAnswer = (questionId, isCorrect, selectedValue) => {
    setSelectedAnswer((prevAnswers) => {
      const filtered = prevAnswers.filter(
        (ans) => ans.questionId !== questionId
      );
      return [...filtered, { questionId, isCorrect, selectedValue }];
    });
  };
  console.log("isUserSelected", selectedAnswer);

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
  const score = useMemo(() => {
    return selectedAnswer?.filter((ans) => ans?.isCorrect)?.length * 10;
  }, [selectedAnswer]);
  return (
    <>
      <h1>Quiz Pokemon </h1>

      <p> Total Score {score} </p>

      {questionData?.map((question) => (
        <QuestionItem
          key={question?.questionId}
          questionInfo={question}
          handleSelectAnswer={handleSelectAnswer}
          selectedAnswer={selectedAnswer}
          getBg={getBg}
          // bgColor={getBg(question?.questionId)}
        />
      ))}
    </>
  );
};
export default QuizApp;
