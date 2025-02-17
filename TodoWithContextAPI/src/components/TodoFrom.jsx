import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          id: Date.now(),
          text,
          completed: false,
        },
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;