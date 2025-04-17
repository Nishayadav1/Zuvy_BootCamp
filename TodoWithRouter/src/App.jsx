import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import TodoFormPage from "./pages/TodoFormPage";
import TodoListPage from "./pages/TodoListPage";

const App = () => {
  return (
    <div>
      <nav style={{ textAlign: "center", margin: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Add Todo</Link>
        <Link to="/todos">View Todos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoFormPage />} />
        <Route path="/todos" element={<TodoListPage />} />
      </Routes>
    </div>
  );
};

export default App;
