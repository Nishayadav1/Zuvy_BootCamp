import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const Post = () => {
  const { state, dispatch } = useContext(PostContext);
  const [comment, setComment] = useState("");

  return (
    <div>
      <h2>Aditya's Post</h2>
      <p><strong>Post Title</strong></p>
      <p>Post Body</p>

      <button onClick={() => dispatch({ type: "LIKE" })}>Like</button>
      <p>Likes: {state.likes}</p>

      <p>Comments: {state.commentCount}</p>

      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment"
        />
        <button
          onClick={() => {
            if (comment.trim() !== "") {
              dispatch({ type: "COMMENT", payload: comment });
              setComment(""); 
            }
          }}
        >
          Comment
        </button>
      </div>

      <h3>Comments</h3>
      <ul>
        {state.comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
