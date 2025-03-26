import React, { createContext, useReducer } from "react";

const initialState = {
  likes: 0,
  comments: [],
  commentCount: 0, // Added comment count
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return { ...state, likes: state.likes + 1 };

    case "COMMENT":
      return { 
        ...state, 
        comments: [...state.comments, action.payload], 
        commentCount: state.commentCount + 1 
      };

    default:
      return state;
  }
};

export const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
