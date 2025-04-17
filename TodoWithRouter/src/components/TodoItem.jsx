import React from "react";
import styles from "../styles/TodoList.module.css";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className={styles.item}>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
