import React from "react";

const CompletedTodo = ({ completedTodos, undoTodo }) => {
  return (
    <div className="todo-section">
      <h2>Completed Tasks ({completedTodos.length})</h2>
      <ul>
        {completedTodos.length === 0 ? (
          <p>No completed tasks.</p>
        ) : (
          completedTodos.map((todo) => (
            <li key={todo.id}>
              {todo.task}
              <button onClick={() => undoTodo(todo.id)}>Undo</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CompletedTodo;