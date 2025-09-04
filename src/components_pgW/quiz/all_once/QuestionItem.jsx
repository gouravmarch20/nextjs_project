import React, { useState } from "react";

const QuestionItem = ({ questionInfo, handleSelectAnswer, getBg }) => {
  const { questionId, next, prev, answer, options, question } = questionInfo;

  return (
    <div className="question-item">
      <div className="question">
        <h3>
          {questionId}. {question}
        </h3>
        <div className="options">
          {options?.map((option, index) => (
            <div
              className={`option ${getBg(questionId, option)}`}
              key={index}
              onClick={() =>
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
