// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments] = useState(props.comments)

  return (
    <div>
        {comments.map(x => (
        <Comment comment={x} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
