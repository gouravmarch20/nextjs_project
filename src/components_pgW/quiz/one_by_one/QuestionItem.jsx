import React, { useState } from "react";

const QuestionItem = ({
  currentQuestion,
  handleSelectAnswer,
  getBg,
  isSelectionAllow,
}) => {
  const { questionId, answer, options, question } = currentQuestion;

  return (
    <div className="question-item">
      <div className="question">
        <h3>
          {questionId}. {question}
        </h3>
        <div className="options">
          {options?.map((option, index) => (
            <div
              className={`option ${getBg(questionId, option)} ${
                isSelectionAllow(questionId) ? "pointer" : "no-pointer "
              }`}
              key={index}
              onClick={() =>
                isSelectionAllow(questionId) &&
                handleSelectAnswer(questionId, option === answer, option)
              }
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default QuestionItem;
