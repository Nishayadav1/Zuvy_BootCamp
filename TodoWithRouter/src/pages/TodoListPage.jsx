import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import styles from "../styles/TodoList.module.css";

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const handleDelete = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  return (
    <div className={styles.container}>
      <h2>All Todos</h2>
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
};

export default TodoListPage;
