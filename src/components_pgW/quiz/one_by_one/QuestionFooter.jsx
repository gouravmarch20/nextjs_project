import React, { useState } from "react";

const QuestionFooter = ({ currentQuestion, isLast, handlePrevNext }) => {
  const { prev, next } = currentQuestion;
  return (
    <div className="question-footer">
      {prev != null && (
        <button onClick={() => handlePrevNext(prev)}> Prev </button>
      )}

      {typeof next == "number" && (
        <button onClick={() => handlePrevNext(next)}> Next </button>
      )}
    </div>
  );
};
export default QuestionFooter;
