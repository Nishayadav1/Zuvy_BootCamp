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


// import { useState } from "react";

// function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   // Handle input change
//   const handleTodoChange = (e) => {
//     setTodo(e.target.value);
//   };

//   // Add a new todo
//   const handleTodoAdd = () => {
//     if (todo.trim() === "") return;
//     setTodos([...todos, { id: Date.now(), task: todo, completed: false }]);
//     setTodo("");
//   };

//   // Toggle complete status
//   const handleCompleteTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Get pending tasks
//   const getPendingTasks = () => {
//     return todos.filter((todo) => !todo.completed);
//   };

//   // Get completed tasks
//   const getCompletedTasks = () => {
//     return todos.filter((todo) => todo.completed);
//   };

//   // Render task list
//   const renderTaskList = (tasks, isCompleted = false) => {
//     return tasks.map((todo) => (
//       <li key={todo.id} style={isCompleted ? { textDecoration: "line-through" } : {}}>
//         {todo.task}
//         {!isCompleted && <button onClick={() => handleCompleteTodo(todo.id)}>Complete</button>}
//       </li>
//     ));
//   };

//   return (
//     <>
//       <h1>Todo App</h1>
//       <input type="text" onChange={handleTodoChange} value={todo} />
//       <button onClick={handleTodoAdd}>Add</button>

//       <h2>Pending Tasks</h2>
//       <ul>{renderTaskList(getPendingTasks())}</ul>

//       <h2>Completed Tasks</h2>
//       <ul>{renderTaskList(getCompletedTasks(), true)}</ul>
//     </>
//   );
// }

// export default App;
