import { apiClient } from "../utils/apiClient";

// Get all todos
export const getTodo = async () => {
    const response = await apiClient.get(`/todos`);
    return response.data;
};

// Add a new todo
export const addTodo = async (todo) => {
    const response = await apiClient.post(`/todos`, todo);
    return response.data;
};

// Update a todo
export const updateTodo = async (id, updatedTodo) => {
    const response = await apiClient.put(`/todos/${id}`, updatedTodo);
    return response.data;
};

// Delete a todo
export const deleteTodo = async (id) => {
    await apiClient.delete(`/todos/${id}`);
};
