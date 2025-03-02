import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import ActiveTodo from "./components/ActiveTodo";
import CompletedTodo from "./components/CompleteTodo";
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      setCompletedTodos([...completedTodos, { ...todo, completed: true }]);
    }
  };

  const undoTodo = (id) => {
    const todo = completedTodos.find((todo) => todo.id === id);
    if (todo) {
      const updatedCompletedTodos = completedTodos.filter((todo) => todo.id !== id);
      setCompletedTodos(updatedCompletedTodos);
      setTodos([...todos, { ...todo, completed: false }]);
    }
  };

  return (
    <>
    <div className="container">
    <h1>Todo App</h1>
    <div >
      <AddTodo addTodo={addTodo} />
      <ActiveTodo todos={todos} toggleTodo={toggleTodo} />
      <CompletedTodo completedTodos={completedTodos} undoTodo={undoTodo} />
      </div>
      </div>
    </>
  );
};

export default App;