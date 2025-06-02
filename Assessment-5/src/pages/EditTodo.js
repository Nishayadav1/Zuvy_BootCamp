import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTodo, updateTodo } from '../api/todoapi';
import TodoForm from '../components/TodoForm';

export default function EditTodo() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: todo, isLoading, isError, error } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodo(id),
  });

  const mutation = useMutation({
    mutationFn: (updatedTodo) => updateTodo({ id, ...updatedTodo }),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
      queryClient.invalidateQueries(['todo', id]);
      navigate('/');
    },
  });

  const handleSubmit = (todoData) => {
    mutation.mutate(todoData);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>Edit Todo</h1>
      <TodoForm 
        initialData={todo}
        onSubmit={handleSubmit}
        isSubmitting={mutation.isLoading}
      />
      {mutation.isError && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Error: {mutation.error.message}
        </div>
      )}
    </div>
  );
}