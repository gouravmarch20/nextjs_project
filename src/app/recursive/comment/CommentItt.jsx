import React from "react";
import CommentUi from "./CommentUi.jsx";
const CommentItt = ({ comments }) => {
  console.log("comments", comments);
  return (
    <div className=" ">
      {comments?.map((comment) => (
        <div>
          <CommentUi comment={comment} />
        </div>
      ))}
    </div>
  );
};
export default CommentItt;
