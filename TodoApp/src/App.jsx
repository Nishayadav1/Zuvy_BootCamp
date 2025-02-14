import './App.css'
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleTodoApp = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), task: todo, completed: false }]);
    setTodo("");
  };

  const CompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filter completed and pending tasks
  const pendingTasks = todos.filter((todo) => !todo.completed);
  const completedTasks = todos.filter((todo) => todo.completed);

  return (
    <>
      <h1>Todo App</h1>
      <input type="text" onChange={handleTodoChange} value={todo} />
      <button onClick={handleTodoApp}>Add</button>

      <h2>Pending Tasks</h2>
      <ul>
        {pendingTasks.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => CompleteTodo(todo.id)}>Complete</button>
          </li>
        ))}
      </ul>

      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((todo) => (
          <li key={todo.id}>
            {todo.task}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
