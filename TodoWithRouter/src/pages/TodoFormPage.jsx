import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import styles from "../styles/TodoForm.module.css";

const TodoFormPage = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className={styles.container}>
      <h2>Add Todo</h2>
      <TodoForm onAdd={handleAddTodo} />
    </div>
  );
};

export default TodoFormPage;
