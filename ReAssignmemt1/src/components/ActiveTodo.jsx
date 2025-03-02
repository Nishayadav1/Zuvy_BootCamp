import React from "react";

const ActiveTodo = ({ todos, toggleTodo }) => {
  return (
    <div className="todo-section">
      <h2>Active Tasks ({todos.length})</h2>
      <ul>
        {todos.length === 0 ? (
          <p>No active tasks.</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.task}
              <button onClick={() => toggleTodo(todo.id)}>Complete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ActiveTodo;