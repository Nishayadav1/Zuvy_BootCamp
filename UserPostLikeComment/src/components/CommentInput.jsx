import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const CommentInput = () => {
  const { dispatch } = useContext(PostContext);
  const [comment, setComment] = useState("");

  const addComment = () => {
    if (comment.trim() !== "") {
      dispatch({ type: "COMMENT", payload: comment });
      setComment("");
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Write a comment" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
      />
      <button onClick={addComment}>Comment</button>
    </div>
  );
};

export default CommentInput;
