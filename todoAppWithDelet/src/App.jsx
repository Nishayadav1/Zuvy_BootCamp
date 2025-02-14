import './App.css'
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

 
  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };


  const handleTodoAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), task: todo, completed: false }]);
    setTodo("");
  };


  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  
  const getPendingTasks = () => todos.filter((todo) => !todo.completed);


  const getCompletedTasks = () => todos.filter((todo) => todo.completed);

 
  const renderTaskList = (tasks, isCompleted = false) => {
    return tasks.map((todo) => (
      <li key={todo.id} style={isCompleted ? { textDecoration: "line-through" } : {}}>
        {todo.task}
        {!isCompleted && <button onClick={() => handleCompleteTodo(todo.id)}>Complete</button>}
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      </li>
    ));
  };

  return (
    <>
      <h1>Todo App</h1>
      <input type="text" onChange={handleTodoChange} value={todo} />
      <button onClick={handleTodoAdd}>Add</button>

      <h2>Pending Tasks</h2>
      <ul>{renderTaskList(getPendingTasks())}</ul>

      <h2>Completed Tasks</h2>
      <ul>{renderTaskList(getCompletedTasks(), true)}</ul>
    </>
  );
}

export default App;
