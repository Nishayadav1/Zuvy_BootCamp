import { useEffect, useState } from "react";
import { getTodo, addTodo, updateTodo, deleteTodo } from "../api/todoApi";

function Try() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTodo();
                setTodos(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleAddTodo = async () => {
        if (!newTodo.trim()) return;
        try {
            const addedTodo = await addTodo({ title: newTodo });
            setTodos([...todos, addedTodo]);
            setNewTodo("");
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateTodo = async (id) => {
        try {
            const updatedTodo = await updateTodo(id, { completed: true });
            setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter todo..."
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        {todo.title} {todo.completed ? "✅" : "❌"}
                        <button onClick={() => handleUpdateTodo(todo._id)}>Complete</button>
                        <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Try;
