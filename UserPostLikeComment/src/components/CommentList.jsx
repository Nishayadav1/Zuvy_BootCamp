import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const CommentList = () => {
  const { state } = useContext(PostContext);

  return (
    <div>
      {state.comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        state.comments.map((comment, index) => <p key={index}>{comment}</p>)
      )}
    </div>
  );
};

export default CommentList;
