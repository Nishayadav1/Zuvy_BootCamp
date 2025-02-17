import React, { useReducer, useState } from "react";
import "./App.css";

const ACTIONS = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  TOGGLE_TODO: "toggle-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name.trim() } });
    setName("");
  }

  const incompleteTasks = todos.filter((todo) => !todo.complete);
  const completeTasks = todos.filter((todo) => todo.complete);

  return (
    <div className="container">
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a new task"
          required
        />
        <button type="submit">Add</button>
      </form>

      <div className="todo-sections">
        <div className="incomplete-tasks">
          <h2>Incomplete Tasks</h2>
          {incompleteTasks.length === 0 ? (
            <p>No incomplete tasks.</p>
          ) : (
            incompleteTasks.map((todo) => (
              <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))
          )}
        </div>

        <div className="complete-tasks">
          <h2>Completed Tasks</h2>
          {completeTasks.length === 0 ? (
            <p>No completed tasks.</p>
          ) : (
            completeTasks.map((todo) => (
              <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function TodoItem({ todo, dispatch }) {
  return (
    <div className="todo-item">
      <span className={todo.complete ? "completed" : ""}>{todo.name}</span>
      <div>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
          className="toggle-button"
        >
          {todo.complete ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } })
          }
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
