import { useState, useEffect, useRef } from "react";

import CommentItt from "./CommentItt.jsx";
function CommentUi({ comment }) {
  console.log("replies", comment);
  return (
    <div key={comment?.commentId} className="my-2 p-2  border ">
      <div className="flex justify-between items-center">
        <div> {comment?.user?.username} </div>
        <img className="w-[20px] h-[20px]" src={comment?.user?.avatarUrl} />
      </div>
      <div> {comment?.content}</div>
      <div> {comment?.likes}</div>

      {comment?.replies?.length > 0 && (
        <CommentItt comments={comment?.replies} />
      )}
    </div>
  );
}

export default CommentUi;
