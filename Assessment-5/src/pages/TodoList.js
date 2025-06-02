import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchTodos, deleteTodo } from '../api/todoapi';
import TodoItem from '../components/TodoItem';

export default function TodoList() {
  const queryClient = useQueryClient();

  const { data: todos = [], isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Todo List</h1>
      <Link 
        to="/add-todo" 
        style={{
          display: 'inline-block',
          margin: '10px 0',
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        Add New Todo
      </Link>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}