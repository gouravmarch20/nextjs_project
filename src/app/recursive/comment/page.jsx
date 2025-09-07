import { useState, useEffect, useRef } from "react";
import { commentData } from "./commentD.js";
import CommentItt from "./CommentItt.jsx";
function App() {
  console.log("commentData", commentData);
  return (
    <main className=" ">
      {/* {commentData?.map((comments) => ( */}
      <CommentItt key={commentData.postId} comments={commentData.comments} />
      {/* ))} */}
    </main>
  );
}

export default App;
