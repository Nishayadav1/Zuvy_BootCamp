import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "../styles/TodoContainer.module.css";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
    ));
  };

  const toggleEdit = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  return (
    <div className={styles.container}>
      <h2>Todo Application</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        toggleEdit={toggleEdit}
      />
    </div>
  );
};

export default TodoContainer;
